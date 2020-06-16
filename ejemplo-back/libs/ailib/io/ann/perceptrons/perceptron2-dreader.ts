import { Reader } from '../../reader';
import { Scanner } from '../../scanner';
import { Perceptron2D } from '../../../ann/perceptrons/perceptron2-d';
import { Sigmoid } from '../../../math/functions/activation/sigmoid';
import { ActivationFunction } from '../../../math/activation-function';
import { Perceptron1DReader } from './perceptron1-dreader';

export class Perceptron2DReader implements Reader {

  function: ActivationFunction;

  constructor(f: ActivationFunction) {
    this.function = f;
  }

  read(scanner: Scanner) {
    let height = scanner.nextInt();
    let weights = [];
    for (let i = 0; i < height; i++)
      weights.push((new Perceptron1DReader(this.function)).read(scanner));
    let beta = scanner.nextDouble();
    return new Perceptron2D(weights, beta, this.function);
  }
}
