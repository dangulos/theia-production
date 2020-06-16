import { Reader } from '../../reader';
import { Scanner } from '../../scanner';
import { ConvolutionalLayerReader } from './convolutional-layer-reader';
import { PoolingField } from '../../../ann/convolutional/pooling-field';
import { ActivationFunction } from '../../../math/activation-function';

export class PoolingFieldReader implements Reader {

  function: ActivationFunction;

  constructor(f: ActivationFunction) {
    this.function = f;
  }

  read(scanner: Scanner) {
    let size = scanner.nextInt();
    let layers = [];
    for (let i = 0; i < size; i++)
      layers.push((new ConvolutionalLayerReader(this.function)).read(scanner));
    return new PoolingField(layers);
  }
}
