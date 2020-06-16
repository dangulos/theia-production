import { Reader } from '../../reader';
import { Scanner } from '../../scanner';
import { ActivationFunction } from '../../../math/activation-function';
import { Perceptron1D } from '../../../ann/perceptrons/perceptron1-d';

export class Perceptron1DReader implements Reader {
  
  function: ActivationFunction;

  constructor(f: ActivationFunction) {
    this.function = f;
  }
  
  read(scanner: Scanner) {
    let size = scanner.nextInt();
    let weights = [];
    for (let i = 0; i < size; i++)
      weights.push(scanner.nextDouble());
    let beta = scanner.nextDouble();
    return new Perceptron1D(weights, beta, this.function);
  }
}
