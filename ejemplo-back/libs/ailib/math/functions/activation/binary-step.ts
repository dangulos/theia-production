import { ActivationFunction } from '../../activation-function';

export class BinaryStep implements ActivationFunction {
  
  activate(x) {
    return (x < 0.0) ? 0.0 : 1.0;
  }

  derivate(x) {
    return (x == 0) ? 1.0 : 0.0;
  }
}
