import { ANN } from '../ann';
import { ReceptiveField } from './receptive-field';
import { PoolingField } from './pooling-field';
import { IntegrationLayer } from './integration-layer';
import { Layer1D } from '../layers/layer1-d';

export class ConvolutionalNetwork implements ANN {

  receptive: ReceptiveField;
  pooling: PoolingField;
  integration: IntegrationLayer;
  outputLayer: Layer1D;

  constructor(
    receptive: ReceptiveField,
    pooling: PoolingField,
    integration: IntegrationLayer,
    outputLayer: Layer1D
  ) {
    this.receptive = receptive;
    this.pooling = pooling;
    this.integration = integration;
    this.outputLayer = outputLayer;
  }

  propagate(input) {
    return this.outputLayer.propagate(this.integration.propagate(this.pooling.propagate(this.receptive.propagate(input))));
  }
}
