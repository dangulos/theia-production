import { ActivationFunction } from '../../activation-function';

export class Tanh implements ActivationFunction {

  activate(x) {
    return Math.tanh(x);
  }

  derivate(x) {
    return 1 + (Math.tanh(x) * Math.tanh(x));
  }
}
