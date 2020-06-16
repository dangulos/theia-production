import { Reader } from '../../reader';
import { Scanner } from '../../scanner';
import { ActivationFunction } from '../../../math/activation-function';
import { Perceptron2DReader } from './perceptron2-dreader';
import { Perceptron3D } from '../../../ann/perceptrons/perceptron3-d';

export class Perceptron3DReader implements Reader {

  function: ActivationFunction;

  constructor(f: ActivationFunction) {
    this.function = f;
  }
  
  read(scanner: Scanner) {
    let size = scanner.nextInt();
    let weights = [];
    for (let i = 0; i < size; i++)
      weights.push((new Perceptron2DReader(this.function)).read(scanner));
    let beta = scanner.nextDouble();
    return new Perceptron3D(weights, beta, this.function);
  }
}
