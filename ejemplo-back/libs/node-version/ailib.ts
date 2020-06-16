import { ConvolutionalNetworkReader } from '../ailib/io/ann/convolutional-network-reader';
import { LSTMReader } from '../ailib/io/ann/lstm-reader';
import { Scanner } from '../ailib/io/scanner';
import { Reader } from '../ailib/io/reader';
import { ANN } from '../ailib/ann/ann';

export class ailibInterface implements Reader{
    private scanner: Scanner;
    private model: ANN;
    private modelType: string;

    constructor(modelStructure:string, modelType:string){
        this.scanner = new Scanner(modelStructure);
        this.modelType = modelType;
        let type = this.modelType.toLowerCase();
        if(type.indexOf("convolutional")>-1 || type.indexOf("cnn")>-1){
            this.model = new ConvolutionalNetworkReader().read(this.scanner);
        }else if(this.modelType.toLowerCase().indexOf("lstm")>-1){
            this.model = new LSTMReader().read(this.scanner);
        }
    }

    read(scanner: Scanner):any{
        let arrayOfScanner:any[] = [];
        let nextText;
        while(scanner.index<scanner.line.length){
            nextText = scanner.nextDouble();
            arrayOfScanner.push(nextText);
        }
        return arrayOfScanner;
    }


    predictForConstrains(inputStructure: any, outputStructure: any, inputs: any){
        let type = this.modelType.toLowerCase();
        if(type.indexOf("convolutional")>-1 || type.indexOf("cnn")>-1){
            return this.predictForConvolutional(inputStructure, outputStructure, inputs);
        }else if(type.indexOf("lstm")>-1){
            return this.predictForLSTM(inputStructure, outputStructure, inputs);
        }else {
            return "Model Not found";
        }
    }

    predictForLSTM(inputStructure: any, outputStructure: any, inputs: any){
        let normalized_inputs:any = []
        for (const key in inputs) {
            if (inputs.hasOwnProperty(key)) {
                normalized_inputs.push(this.prepareLSTMInputColumn(inputs[key], inputStructure, key));
            }
        }
        let propagated = this.model.propagate(this.transposeLSTMInputs(normalized_inputs));
        let restored = this.restoreOutputs(outputStructure, propagated);        
        return restored;
    }


    predictForConvolutional(inputStructure: any, outputStructure: any, inputs: any){
        let normalized_inputs:any = [];
        for (const key in inputs) {
            if (inputs.hasOwnProperty(key)) {
                normalized_inputs.push(this.prepareCNNInputColumn(inputs[key], inputStructure, key));
            }
        }
        return this.restoreOutputs(outputStructure, this.model.propagate(normalized_inputs));
    }

    restoreOutputs(outputConfig: any, propagated: any[]) {

        let restoredObj = {};
        let columnRestorationConfig = outputConfig.columns.filter((obj:any) => {
            return obj.type !='key';
        });

        for (let i = 0; i < columnRestorationConfig.length; i++) {
            if(columnRestorationConfig[i].type == "normalization"){
                restoredObj[columnRestorationConfig[i].name] = this.restoreNormalize(columnRestorationConfig[i].settings, propagated[i]);
            }
            else if (columnRestorationConfig[i].type == "replacement"){
                restoredObj[columnRestorationConfig[i].name] = this.restoreReplace(columnRestorationConfig[i].settings,  propagated[i]);
            }
        }
        return restoredObj;
    }

    restoreNormalize(settings: any, output: any){
        return ((output-0.5)*(parseFloat(settings.deviation)*10))+parseFloat(settings.average);
    }

    restoreReplace(settings: any, propagated: any[]){
        return propagated;
    }


    transposeLSTMInputs(inputs: any []){
        let transInverse = [];
        for (let i = 0; i < inputs[0].length; i++)
        {
            transInverse[i] =[];
            for (let j = 0; j < inputs.length; j++)
                transInverse[i][j] = inputs[j][inputs[0].length - i - 1];
        }
        //console.log(">> transposing ...", inputs, transInverse);
        return transInverse;
    }

    prepareLSTMInputColumn(inputs: number[], inputStructure: any, columnName:string){
        let columnTransformationConfig = inputStructure.columns.filter((obj: any) => {
            return obj.name.indexOf(columnName)>-1;
        });
        if(columnTransformationConfig.length>0) 
            return this.transformInputs(columnTransformationConfig[0], inputs);
        else 
            return [];
        
    }

    prepareCNNInputColumn(inputs: number[], inputStructure: any, columnName:string){
        let columnTransformationConfig = inputStructure.columns.filter((obj: any) => {
            return obj.name.indexOf(columnName)>-1;
        });
        if(columnTransformationConfig.length>0) 
            return this.transformInputs(columnTransformationConfig[0], inputs);
        else 
            return [];
    }

    transformInputs(config: any, inputs:number[]){
        if(config.type == "normalization"){
            return this.transformNormalize(config.settings, inputs);
        }
        else if (config.type == "replacement"){
            return this.transformReplacement(config.settings, inputs);
        }
    }

    transformNormalize(settings: any, input: number[]) {
        let normalized = [];
        for (let i = 0; i < input.length; i++) {
            normalized.push(((input[i]-settings.average)/(settings.deviation*10))+0.5)
        }
        return normalized;
    }

    //needs implementation
    transformReplacement(settings: any, input: number[]) {
        return input;
    }

    
}
