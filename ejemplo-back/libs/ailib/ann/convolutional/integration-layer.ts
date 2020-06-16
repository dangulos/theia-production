import { Layer } from '../layer';
import { Perceptron3D } from '../perceptrons/perceptron3-d';

export class IntegrationLayer extends Layer {

  constructor(neurons: Perceptron3D[]) {
    super(neurons);
  }

  propagate(input) {
    let result = [];
    for (let i = 0;  i < this.neurons.length; i++)
      result.push(this.neurons[i].propagate(input));
    return result;
  }

  weightedInput(input) {
    let result = [];
    for (let i = 0;  i < this.neurons.length; i++)
      result.push(this.neurons[i].weightedInput(input));
    return result;
  }

  activate(weightedSum) {
    let result = [];
    for (let i = 0;  i < this.neurons.length; i++)
      result.push(this.neurons[i].weightedInput(weightedSum[i]));
    return result;
  }
}
