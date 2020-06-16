import { ActivationFunction } from '../../activation-function';

export class Identity implements ActivationFunction {

  activate(x) {
    return x;
  }

  derivate(x) {
    return 1.0;
  }
}
