import { ActivationFunction } from '../../activation-function';

export class Sigmoid implements ActivationFunction {
  
  activate(x) {
    return 1.0 / (1.0 + Math.exp(-x));
  }

  derivate(x) {
    let  val = Math.exp(-x);
    return val / Math.pow(1.0 + val, 2.0) ;
  }
}
