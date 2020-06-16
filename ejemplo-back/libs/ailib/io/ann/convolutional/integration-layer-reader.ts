import { Reader } from '../../reader';
import { ActivationFunction } from '../../../math/activation-function';
import { Scanner } from '../../scanner';
import { IntegrationLayer } from '../../../ann/convolutional/integration-layer';
import { Perceptron3DReader } from '../perceptrons/perceptron3-dreader';

export class IntegrationLayerReader implements Reader {

  function: ActivationFunction;

  constructor(f: ActivationFunction) {
    this.function = f;
  }

  read(scanner: Scanner) {
    let size = scanner.nextInt();
    let neurons = [];
    for (let i = 0; i < size; i++)
      neurons.push((new Perceptron3DReader(this.function)).read(scanner));
    return new IntegrationLayer(neurons);
  }
}
