import { Layer1D } from '../layers/layer1-d';

export class Cell {
  F: Layer1D;
  I: Layer1D;
  C: Layer1D;
  O: Layer1D;

  constructor(
    F: Layer1D,
    I: Layer1D,
    C: Layer1D,
    O: Layer1D
  ) {
    this.F = F;
    this.I = I;
    this.C = C;
    this.O = O;
  }

  propagate(input, output, previous) {
    let result = [];
    let data = this.join(input, output);
    let f_t = this.F.propagate(data);
    let i_t = this.I.propagate(data);
    let c_t = this.C.propagate(data);
    let o_t = this.O.propagate(data);
    for (let i = 0; i < output.length; i++) {
      c_t[i] = (f_t[i] * previous[i]) + (i_t[i] * c_t[i]);
      result.push(o_t[i] * Math.tanh(c_t[i]));
    }
    return { result: result, state: c_t };
  }

  join(input, output) {
    let result = [];
    for (let i = 0; i < input.length; i++)
      result.push(input[i]);
    for (let i = 0; i < output.length; i++)
      result.push(output[i]);
    return result;
  }
}
