import { Reader } from '../../reader';
import { Scanner } from '../../scanner';
import { ConvolutionalLayer } from '../../../ann/convolutional/convolutional-layer';
import { DimensionReader } from '../../utils/dimension-reader';
import { Perceptron2DReader } from '../perceptrons/perceptron2-dreader';
import { ActivationFunction } from '../../../math/activation-function';

export class ConvolutionalLayerReader implements Reader {

  function: ActivationFunction;

  constructor(f: ActivationFunction) {
    this.function = f;
  }

  read(scanner: Scanner) {
    let height = scanner.nextInt();
    let width = scanner.nextInt();
    let neurons = [];
    for (let i = 0; i < height; i++) {
      neurons.push([]);
      for (let j = 0; j < width; j++)
        neurons[i].push((new Perceptron2DReader(this.function)).read(scanner));
    }
    return new ConvolutionalLayer(neurons, (new DimensionReader()).read(scanner));
  }
}
