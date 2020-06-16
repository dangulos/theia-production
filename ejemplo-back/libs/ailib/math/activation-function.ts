import { ActivatedRoute } from '@angular/router'

export interface ActivationFunction {
  activate(x);
  derivate(x);
}
