import { Layer } from '../layer';
import { Dimension } from '../../utils/dimension';
import { Location } from '../../utils/location';
import { Perceptron2D } from '../perceptrons/perceptron2-d';

export class ConvolutionalLayer extends Layer {
  
  stride: Dimension;

  constructor(neurons: Perceptron2D[][], stride: Dimension) {
    super(neurons);
    this.stride = stride;
  }

  propagate(input) {
    let result = [];
    for (let i = 0, y = 0; i < this.neurons.length; i++, y += this.stride.height) {
      result.push([]);
      for (let j = 0, x = 0; j < this.neurons[i].length; j++, x += this.stride.width)
        result[i][j] = this.neurons[i][j].propagateFromLocation(new Location(x, y, 0), input);
    }    
    return result;
  }

  weightedInput(input) {
    let result = [];
    for (let i = 0, y = 0; i < this.neurons.length; i++, y += this.stride.height) {
      result.push([]);
      for (let j = 0, x = 0; j < this.neurons.length; j++, x += this.stride.width)
        result[i][j] = this.neurons[i][j].calculateWeightedInput(new Location(x, y, 0), input);
    }
    return result;
  }

  activate(weightedSum) {
    let result = [];
    for (let i = 0; i < this.neurons.length; i++) {
      result.push([]);
      for (let j = 0; j < this.neurons.length; j++)
        result[i][j] = this.neurons[i][j].activate(weightedSum[i][j]);
    }
    return result;
  }

  width() {
    return this.neurons[0].length;
  }

  height() {
    return this.neurons.length;
  }

  test(){  
    console.log("I'm working!");
  }
}
