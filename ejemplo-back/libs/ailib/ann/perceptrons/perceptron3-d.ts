import { Perceptron } from '../perceptron';
import { Perceptron2D } from './perceptron2-d';
import { ActivationFunction } from '../../math/activation-function';

export class Perceptron3D extends Perceptron {

  constructor(weights: Perceptron2D[], beta, f: ActivationFunction) {
    super(weights, beta, f);
  }

  calculateWeightedInput(start, input) {
    let sum = 0.0;
    for (let i = 0; i < this.weights.length; i++)
      sum += this.weights[i].calculateWeightedInput(start, input[start.z + i]);
    return sum;
  }

  width() {
    return this.weights[0].width();
  }

  height() {
    return this.weights[0].height();
  }

  length() {
    return this.size();
  }
}
