import { Layer } from '../layer';
import { Perceptron1D } from '../perceptrons/perceptron1-d';

export class Layer1D extends Layer {
  
  constructor(neurons: Perceptron1D[]) {
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
    for (let i = 0; i < this.neurons.length; i++)
      result.push(this.neurons[i].weightedInput(input));
  }

  activate(weightedSum) {
    let result = [];
    for (let i = 0; i < this.neurons.length; i++)
      result.push(this.neurons[i].activate(weightedSum[i]));
    return result;
  }
}
