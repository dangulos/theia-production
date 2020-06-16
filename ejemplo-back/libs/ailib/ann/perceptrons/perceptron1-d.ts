import { Perceptron } from '../perceptron';

export class Perceptron1D extends Perceptron {
  
  constructor(weights, beta, f) {
    super(weights, beta, f);
  }

  calculateWeightedInput(start, input) {
    let sum = 0.0;
    for (let i = 0; i < this.weights.length; i++)
      sum += this.weights[i] * input[start.x + i];
    return sum;
  }
}
