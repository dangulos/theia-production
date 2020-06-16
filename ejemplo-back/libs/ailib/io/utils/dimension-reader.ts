import { Reader } from '../reader';
import { Scanner } from '../scanner';
import { Dimension } from '../../utils/dimension';

export class DimensionReader implements Reader {

  read(scanner: Scanner) {
    let width = scanner.nextInt();
    let height = scanner.nextInt();
    let length = scanner.nextInt();
    return new Dimension(width, height, length);
  }
}
