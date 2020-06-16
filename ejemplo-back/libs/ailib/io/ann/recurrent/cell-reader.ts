import { Reader } from '../../reader';
import { Scanner } from '../../scanner';
import { Layer1DReader } from '../layers/layer1-dreader';
import { Sigmoid } from '../../../math/functions/activation/sigmoid';
import { Cell } from '../../../ann/recurrent/cell';

export class CellReader implements Reader {

  read(scanner: Scanner) {
    let reader = new Layer1DReader(new Sigmoid());
    let F = reader.read(scanner);
    let I = reader.read(scanner);
    let C = reader.read(scanner);
    let O = reader.read(scanner);
    return new Cell(F, I, C, O);
  }
}
