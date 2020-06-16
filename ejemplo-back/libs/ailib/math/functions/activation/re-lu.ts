import { ActivationFunction } from '../../activation-function';

export class ReLU implements ActivationFunction {
  
  activate(x) {
    return (x > 0) ? x : 0;
  }

  derivate(x) {
    return (x > 0) ? 1 : 0;
  }
}
