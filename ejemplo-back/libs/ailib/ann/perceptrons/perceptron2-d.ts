import { Perceptron } from '../perceptron';
import { Perceptron1D } from './perceptron1-d';
import { ActivationFunction } from '../../math/activation-function';

export class Perceptron2D extends Perceptron {

  constructor(weights: Perceptron1D[], beta, f: ActivationFunction) {
    super(weights, beta, f);
  }

  calculateWeightedInput(start, input) {
    let sum = 0.0;
    for (let i = 0; i < this.weights.length; i++)
      sum += this.weights[i].calculateWeightedInput(start, input[start.y + i]);
    return sum;
  }

  width() {
    return this.weights[0].size();
  }

  height() {
    return this.size();
  }
}
