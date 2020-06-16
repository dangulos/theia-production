import { Reader } from '../reader';
import { Scanner } from '../scanner';
import { ReceptiveFieldReader } from './convolutional/receptive-field-reader';
import { PoolingFieldReader } from './convolutional/pooling-field-reader';
import { Sigmoid } from '../../math/functions/activation/sigmoid';
import { IntegrationLayerReader } from './convolutional/integration-layer-reader';
import { ConvolutionalNetwork } from '../../ann/convolutional/convolutional-network';
import { Layer1DReader } from './layers/layer1-dreader';

export class ConvolutionalNetworkReader implements Reader {

  read(scanner: Scanner) {
    let receptive = (new ReceptiveFieldReader(new Sigmoid())).read(scanner);
    let pooling = (new PoolingFieldReader(new Sigmoid())).read(scanner);
    let integration = (new IntegrationLayerReader(new Sigmoid())).read(scanner);
    let outputLayer = (new Layer1DReader(new Sigmoid())).read(scanner);
    return new ConvolutionalNetwork(receptive, pooling, integration, outputLayer);
  }
}
