import { Reader } from '../../reader';
import { Scanner } from '../../scanner';
import { ActivationFunction } from '../../../math/activation-function';
import { Perceptron1DReader } from '../perceptrons/perceptron1-dreader';
import { Layer1D } from '../../../ann/layers/layer1-d';

export class Layer1DReader implements Reader {

  function: ActivationFunction;

  constructor(f: ActivationFunction) {
    this.function = f;
  }
  
  read(scanner: Scanner) {
    let size = scanner.nextInt();
    let neurons = [];
    for (let i = 0; i < size; i++)
      neurons.push((new Perceptron1DReader(this.function)).read(scanner));
    return new Layer1D(neurons);
  }
}
