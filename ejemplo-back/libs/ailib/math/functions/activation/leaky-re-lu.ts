import { ActivationFunction } from '../../activation-function';

export class LeakyReLU implements ActivationFunction {

  leak;

  constructor(leak) {
    this.leak = leak;
  }

  activate(x) {
    return (x > 0) ? x : this.leak * x;
  }

  derivate(x) {
    return (x > 0) ? 1 : this.leak;
  }
}
