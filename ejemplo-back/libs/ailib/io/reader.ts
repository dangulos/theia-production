import { Scanner } from './scanner';

export interface Reader {
  read(scanner: Scanner):any;
}
