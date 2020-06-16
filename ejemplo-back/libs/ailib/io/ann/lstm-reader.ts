import { Reader } from '../reader';
import { Scanner } from '../scanner';
import { CellReader } from './recurrent/cell-reader';
import { LSTM } from '../../ann/recurrent/lstm';

export class LSTMReader implements Reader {

  read(scanner: Scanner) {
    let outputSize = scanner.nextInt();
    let size = scanner.nextInt();
    let strap = [];
    for (let i = 0; i < size; i++)
      strap.push((new CellReader()).read(scanner));
    return new LSTM(strap, outputSize);
  }
}
