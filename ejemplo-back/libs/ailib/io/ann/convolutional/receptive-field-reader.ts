import { Reader } from '../../reader';
import { Scanner } from '../../scanner';
import { ReceptiveField } from '../../../ann/convolutional/receptive-field';
import { ConvolutionalLayerReader } from './convolutional-layer-reader';
import { Sigmoid } from '../../../math/functions/activation/sigmoid';
import { ActivationFunction } from '../../../math/activation-function';

export class ReceptiveFieldReader implements Reader {

  function: ActivationFunction;

  constructor(f: ActivationFunction) {
    this.function = f;
  }

  read(scanner: Scanner) {
    let size = scanner.nextInt();
    let layers = [];
    for (let i = 0; i < size; i++)
      layers.push((new ConvolutionalLayerReader(this.function)).read(scanner));
    return new ReceptiveField(layers);
  }
}
