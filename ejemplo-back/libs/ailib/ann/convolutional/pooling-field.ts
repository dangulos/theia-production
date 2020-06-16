import { Layer } from '../layer';
import { ConvolutionalLayer } from './convolutional-layer';

export class PoolingField extends Layer {

  constructor(neurons: ConvolutionalLayer[]) {
    super(neurons);
  }

  propagate(input) {
    let result = [];
    for (let i = 0; i < this.neurons.length; i++)
      result.push(this.neurons[i].propagate(input[i]));
    return result;
  }

  weightedInput(input) {
    let result = [];
    for (let i = 0; i < this.neurons.length; i++)
      result.push(this.neurons[i].weightedInput(input[i]));
    return result;
  }

  activate(weightedSum) {
    let result = [];
    for (let i = 0; i < this.neurons.length; i++)
      result.push(this.neurons[i].activate(weightedSum[i]));
    return result;
  }
}
