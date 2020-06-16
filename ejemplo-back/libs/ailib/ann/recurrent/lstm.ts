import { ANN } from '../ann';
import { Cell } from './cell';

export class LSTM implements ANN {

  strap: Cell[];
  outputSize = 0;

  constructor(strap: Cell[], outputSize) {
    this.strap = strap;
    this.outputSize = outputSize;
  }

  propagate(input) {
    let result = { result: [], state: [] };

    for (let i = 0; i < this.outputSize; i++) {
      result.result.push(0);
      result.state.push(0);
    }

    for (let i = 0; i < this.strap.length; i++)
      result = this.strap[i].propagate(input[i], result.result, result.state);

    return result.result;
  }
}
