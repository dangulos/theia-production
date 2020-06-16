import { Perceptron } from './perceptron';

export abstract class Layer {

  neurons;

  constructor(neurons) {
    this.neurons = neurons;
  }

  abstract propagate(input);
  abstract weightedInput(input);
  abstract activate(weightedSum);

  size() {
    return this.neurons.length;
  }
}
