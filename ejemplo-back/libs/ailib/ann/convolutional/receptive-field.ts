import { Layer } from '../layer';
import { ConvolutionalLayer } from './convolutional-layer';

export class ReceptiveField extends Layer {
  
  constructor(neurons: ConvolutionalLayer[]) {
    super(neurons);
  }

  propagate(input) {
    let result = [];
    for (let i = 0; i < this.neurons.length; i++)
      result.push(this.neurons[i].propagate(input));    
    return result;
  }

  weightedInput(input) {
    let result = [];
    for (let i = 0; i < result.length; i++)
      result.push(this.neurons.weightedInput(input));
    return result;
  }

  activate(weightedSum) {
    let result = [];
    for (let i = 0; i < result.length; i++)
      result.push(this.neurons.activate(weightedSum[i]));
    return result;
  }
}
