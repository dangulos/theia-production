import { ActivationFunction } from '../math/activation-function';
import { Location } from '../utils/location';

export abstract class Perceptron {
  weights = [];
  beta = 0.0;
  function: ActivationFunction;
  
  constructor(weights, beta, f: ActivationFunction) {
    this.weights = weights;
    this.beta = beta;
    this.function = f;
  }

  weightedInput(input) {
    return this.calculateWeightedInput(new Location(0, 0, 0), input);
  }

  abstract calculateWeightedInput(start, input);

  propagate(input) {
    return this.activate(this.weightedInput(input));
  }

  activate(weightedSum) {
    return this.function.activate(weightedSum + this.beta);
  }

  propagateFromLocation(start, input){
      return this.activate(this.calculateWeightedInput(start, input));
  }

  size() {
    return this.weights.length;
  }
}
