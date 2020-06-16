var ProductP = require('../models/product');
var jwt = require('jsonwebtoken');
var config = require('../config/config');
var query = require('../queries/querycontroller');
var ailibInterface = require('../libs/node-version/ailib.js').ailibInterface;

exports.getAllProducts = (req,res) =>{
    query.getAllProducts({},(err, data) => {
        return process(res, err, data)
    });
};

exports.getAllProductsForMarketPlace = (req,res) =>{
    query.getAllProductsForMarketPlace({},(err, data) => {
        return process(res, err, data)
    });
};

exports.getAllProductsForUser = (req,res) =>{
    query.getAllProductsForUser({user_id: req.body.user_id},(err, data) => {
        return process(res, err, data)
    });
};

exports.getAllUpdatesForModel = (req, res) => {
    query.getAllUpdatesForModel({ product_id: req.body.product_id }, (err, data)=>{
        return process(res, err, data);
    })
}

exports.getAllUpdatesForUser = (req, res) => {
    query.getAllUpdatesForUser({ user_id: req.body.user_id }, (err, data)=>{
        return process(res, err, data);
    })
}

exports.getModelFromProduct = (req, res) =>{
    query.getModelForProductAndUser({ product_id: req.body.product_id, user_id: req.body.user_id }, (err, data)=>{
        return process(res, err, data);
    })
}

exports.getStatisticsForUpdate = (req, res) => {
    query.getStatisticsForUpdate({ update_stats_id: req.body.update_stats_id}, (err, data)=>{
        return process(res, err, data);
    })
}

exports.getInputsForUpdate = (req, res) => {
    query.getInputsForUpdate({ model_updates_id: req.body.model_updates_id }, (err, data)=>{
        return process(res, err, data);
    })
}

exports.getOutputsForUpdate = (req, res) => {
    query.getOutputsForUpdate({ model_updates_id: req.body.model_updates_id }, (err, data)=>{
        return process(res, err, data);
    })
}

exports.getDatasetsForUser = (req, res) =>{
    query.getDatasetsForUser({user_id: req.body.user_id}, (err, data)=>{
        return process(res, err, data);
    })
}

exports.getModels = (req,res)=>{
    query.getModels({},(err,data)=>{
        return process(res,err,data)
    });
}


exports.getDatasets = (req,res)=>{
    query.getDatasets({},(err,data)=>{
        return process(res,err,data)
    });
}

exports.getMyProducts = (req, res) =>{
    query.getMyProducts({username:req.body.username},(err,data)=>{
        return process(res,err,data)
    });
}

exports.createProductPerUser = (req, res)=>{
    query.createProductPerUser({product_id: req.body.product_id,user_id: req.body.user_id, is_author:req.body.is_author}, (err,data)=>{
        return process(res,err,data)
    })
}

exports.getDataset = (req, res) =>{
    query.getDataset({product_id: req.body.product_id},(err, data) =>{
        return process(res,err,data)
    })
}

exports.createNewUpdateForModel = (req, res)=> {
    let actualDate = getFullDate();
    query.createNewUpdateForModel({model_product_id:req.body.model_product_id,creation_date:actualDate,request_date:actualDate}, (err, data)=>{
        if(err) res.status(400).json({ 'msg': err  });
        else 
            query.getUpdateByDate({creation_date: actualDate}, (error, statsData)=>{
                return process(res,error,statsData);
            });
    });
}

exports.getModelClasses = (req,res)=>{
    query.getModelClasses({}, (err, data)=>{
        return process(res, err, data);
    })
}

exports.getModelClassesJoinProducts = (req,res)=>{
    query.getModelClassesJoinProducts({model_class_id: req.body.model_class_id}, (err, data)=>{
        return process(res, err, data);
    })
}

exports.getModelClassesName = (req,res)=>{
    query.getModelClassesName({}, (err, data)=>{
        return process(res, err, data);
    })
}

exports.getModelsForUser = (req,res)=>{
    query.getModelsForUser({user_id: req.body.user_id}, (err, data)=>{
        return process(res, err, data);
    })
}

exports.getNewUpdateStructureId = (req, res)=>{
    let request_date = getFullDate();
    
    query.createNewUpdateStructure({creation_date: request_date,model_updates_id:req.body.model_updates_id}, (err, data)=>{
        return process(res, err, data);

        /*
        if(err) res.status(400).json({ 'msg': err  });
        else 
            query.getUpdateStructureId({creation_date: request_date}, (error, statsData)=>{
                return process(res,error,statsData);
            });*/
    });
}

exports.getNewUpdateInputGroupId = (req, res)=>{
    let request_date = getFullDate();
    query.createNewUpdateInputGroup({creation_date: request_date, model_updates_id:req.body.model_updates_id}, (err, data)=>{
        return process(res, err, data);
        /*
        if(err) res.status(400).json({ 'msg': err  });
        else 
            query.getUpdateInputGroupId({creation_date: request_date}, (error, statsData)=>{
                return process(res,error,statsData);
            });*/
    });
}

exports.getNewUpdateOutputGroupId = (req, res)=>{
    let request_date = getFullDate();
    query.createNewUpdateOutputGroup({creation_date: request_date, model_updates_id:req.body.model_updates_id}, (err, data)=>{
        return process(res, err, data);
        /*
        if(err) res.status(400).json({ 'msg': err  });
        else 
            query.getUpdateOutputGroupId({creation_date: request_date}, (error, statsData)=>{
                return process(res,error,statsData);
            });
            */
    });
}

exports.getNewUpdateForecastSeriesId = (req, res)=>{
    let request_date = getFullDate()
    query.createNewUpdateForecastSeries({creation_date: request_date, model_updates_id:req.body.model_updates_id}, (err, data)=>{
        return process(res, err, data);
        /*
        if(err) res.status(400).json({ 'msg': err  });
        else 
            query.getUpdateForecastSeries({creation_date: request_date}, (error, statsData)=>{
                return process(res,error,statsData);
            });
            */
    });
}

exports.getNewUpdateStatsId = (req, res)=>{
    let request_date = getFullDate();
    console.log('getNewUpdateStatsId:',req.body.model_updates_id,' ',req.body.model_update_id);
    query.createNewUpdateStats({request_date: request_date, model_updates_id:req.body.model_updates_id }, (err, data)=>{
        return process(res, err, data);
        /*
        if(err) res.status(400).json({ 'msg': err  });
        else 
            query.getUpdateStatsId({request_date: request_date}, (error, statsData)=>{
                return process(res,error,statsData);
            });
        */
    });
}

exports.createNewProduct = (req, res) =>{
    query.createNewProduct({
        name: req.body.name, 
        product_type_id: req.body.product_type_id,
        creation_date
    },(err, data) =>{
        if(err) res.status(400).json({ 'msg': err  });
        else{
            query.getLastProductByName({name: req.body.name}, (error, statsData) =>{
                return process(res,error,statsData);
            });
        }
    });
}

exports.updateInputDataForUpdate = (req, res) =>{
    query.updateInputDataForUpdate({model_updates_id: req.body.model_updates_id, input_data: req.body.input_data}, (err, data) =>{
        return process(res,err,data);
    });
}

exports.updateOutputDataForUpdate = (req, res) =>{
    query.updateOutputDataForUpdate({model_updates_id: req.body.model_updates_id, output_data: req.body.output_data}, (err, data) =>{
        return process(res,err,data);
    });
}

exports.updateStructureDataForModelVersion = (req, res)=>{
    req.body.structure.structure['update_date'] = getFullDate();
    query.updateStructureDataForModelVersion( req.body.structure, (err, data)=>{
        return process(res, err, data);
    })
}

exports.createNewDataset = (req, res) =>{
    query.createNewDataset({
        name: req.body.name, 
        product_id: req.body.product_id,
        symbol: req.body.symbol,
        user_id: req.body.user_id,
        data: JSON.stringify(req.body.data)
    },(err, data) =>{
        if(err) res.status(400).json({ 'msg': err  });
        else{
            query.getdatasetByProductId({product_id: req.body.product_id}, (error, statsData) =>{
                return process(res,error,statsData);
            });
        }
    });
}

exports.getPredictions = (req, res) =>{
    let apiKey = cypherApiKey(req.body.apiKey);
    query.getApiRecordByKey({apiKey: apiKey}, (err, result)=>{
        let record = result.rows[0];
        if(err) res.status(400).json({ 'msg': err  });
        else if(record){
            if(record.domain == req.get('origin')) 
                return getPredictionsForModel(record, req.body.params, res);
            else 
                res.status(400).json({ 'msg': "Invalid domain for request"  });
        }
        else res.status(400).json({ 'msg': "Api key invalid"  });  
    });
}

exports.getUpdateForecastingByUpdateId = (req,res)=>{
    query.getUpdateForecastingByUpdateId({model_update_id:req.body.model_update_id},(err, data)=>{
        return process(res, err, data);
    })
}

async function getPredictionsForModel(apiRecord, params, res){
    let user_id = apiRecord.user_id;
    let result = params;
    try{
        let dataset_id = await getDatasetIdByUserAndName(user_id, result.dataset);
        let model_product_id = await getModelIdByUserAndClass(user_id, result.model, dataset_id);
        let update_data = await getUpdateFromUserModelClass(model_product_id, params.version);
        let input_data = await getInputsFromId(update_data.model_update_id);
        let output_data = await getOutputsFromId(update_data.model_update_id);
        let structure = await getStructureFromId(update_data.model_update_id);        

        let ailibLibrary = new ailibInterface(structure.structure.data, result.model);
        let prediction = ailibLibrary.predictForConstrains(input_data, output_data, result.input);
        console.log(">> prediction", prediction);
        result['predictions'] = (prediction)? prediction: "not available";
    }catch(e){
        console.log(e);
        result['predictions'] = e;
    }
    
    console.log(">> result", result);
    //result['structure'] = structure;
    //result['input_data'] = input_data;
    //result['output_data'] = output_data;
    return process(res, null, result);
}

async function getInputsFromId (input_group_id){
    let request = {model_update_id: input_group_id};
    let response = await promisedInputsFromId(request);
    return response;
}

function promisedInputsFromId(request){
    return new Promise((resolve, reject)=>{
        query.getInputsFromId(request, (err, result)=>{
            let inputs = ( result.rows== undefined )? undefined : result.rows[0].input_data;
            if(inputs) resolve(inputs);
            else {
                console.log(">> couldn't recover inputs from id",request,err);
                reject(err);
            }
        })
    });
}


async function getOutputsFromId (output_group_id){
    let request = {model_update_id: output_group_id};
    let response = await promisedOutputsFromId(request);
    return response;
}

function promisedOutputsFromId(request){
    return new Promise((resolve, reject)=>{
        query.getOutputsFromId(request, (err, result)=>{
            let outputs = (result.rows[0]== undefined )?undefined:result.rows[0].output_data;
            if(outputs) resolve(outputs);
            else {
                cconsole.log(">> couldn't recover outputs from id",request,err);
                reject(err);
            }
        })
    });
}

async function getStructureFromId (model_updates_id){
    let request = {model_updates_id: model_updates_id};
    let response = await promisedStructureFromId(request);
    return response;
}

function promisedStructureFromId(request){
    return new Promise((resolve, reject)=>{
        query.getStructureFromId(request, (err, result)=>{
            //let structure = result.rows[0];
            if(result.rows) resolve(result.rows[0]);
            else {
                console.log(">> couldn't recover structure from id",request,err);
                reject(err);
            }
        })
    });
}

async function getUpdateFromUserModelClass (model_id, version){
    let request = {model_id: model_id, offset: (version=="latest")? 0: version };
    let response = await promisedUpdateFromUserModelClass(request);
    return response;
}

function promisedUpdateFromUserModelClass(request){
    return new Promise((resolve, reject)=>{
        query.getUpdateFromUserModelClass(request, (err, result)=>{
            if(result.rows) resolve(result.rows[0]);
            else {
                console.log(">> couldn't recover update from user model class ",request,err);
                reject(err);
            }
        })
    });
}

async function getModelIdByUserAndClass(user_id, model_class, dataset_id){
    let request = {user_id: user_id, class: model_class, dataset_id: dataset_id};
    let id = await promisedModelIdByUserAndClass(request);
    return id;
}

function promisedModelIdByUserAndClass(request){
    return new Promise((resolve, reject)=>{
        query.getModelIdByUserAndClass(request, (err, result)=>{
            let m_id = (result.rows[0] == undefined )?undefined:result.rows[0].product_id;
            if(m_id) resolve(m_id);
            else {
                console.log(err);
                reject(0);
            }
        })
    });
}

async function getDatasetIdByUserAndName(user_id, dataset_name){
    let request = {user_id: user_id, dataset_name: dataset_name};
    let id = await promisedDatasetIdByUserAndName(request);
    return id;
}

function promisedDatasetIdByUserAndName(request){
    return new Promise((resolve, reject)=>{
        query.getDatasetIdByUserAndName(request, (err, result)=>{
            let d_id = (result.rows[0] != undefined)? result.rows[0].product_id: undefined;
            if(d_id) resolve(d_id);
            else {
                console.log(">> checking dataset by user and id and name", request, err);
                reject(0);
            }
        })
    });
}

exports.updateForecastSeriesDataForModelVersion = (req, res) =>{
    req.body.forecastData.forecast_series['update_date'] = getFullDate();
    query.updateForecastSeriesDataForModelVersion( req.body.forecastData, (err, data)=>{
        return process(res, err, data);
    })
}

//create a new model

exports.createProduct = (req, res) =>{
    let date = getFullDate();
    query.createNewProduct({
        product_type_id:req.body.product_type_id,
        name:req.body.name,
        description:req.body.description,
        creation_date: date
    },(err,result)=>{
        if(err) res.status(400).json({ 'msg': err  });
        else{
            query.getNewProductId({creation_date: date}, (e,ans)=>{
                return process(res,e,ans);
            })
        }

    })
};

exports.createNewModel = (req,res)=>{
    let date = getFullDate();
    query.createModel({
        dataset_product_id:req.body.dataset_product_id,
        product_id:req.body.product_id,
        user_id:req.body.user_id,
        class_id:req.body.class_id,
        last_update_id:date
    },(err, data)=>{
        return process(res, err, data);
    })
}

function cypherApiKey(key){
    return key;
}

function getFullDate(){
    const date = new Date();
    const year = ''+date.getFullYear();
    let month = date.getMonth() + 1;
    month  = (month > 9)? ''+month: '0'+month;
    const day = (date.getDate() > 9)? ''+ date.getDate(): '0'+date.getDate() ;
    const hours = (date.getHours() > 9)? ''+ date.getHours(): '0'+date.getHours() ;
    const minutes = (date.getMinutes() > 9)? ''+ date.getMinutes(): '0'+date.getMinutes();
    const seconds = (date.getSeconds() > 9)? ''+ date.getSeconds(): '0'+date.getSeconds();
    const mili = (date.getMilliseconds() < 100)? ((date.getMilliseconds() < 10)? '00'+date.getMilliseconds(): '0'+date.getMilliseconds()) : ''+date.getMilliseconds(); 
    return year+month+day+hours+minutes+seconds+mili;
}

function process(res, err, result) {
    if (err)
        return res.status(400).json({ 'msg': err  });
    else if (result)
        return res.status(200).json({ result });
    return res.status(400).json({ 'msg': "empty query" });
}