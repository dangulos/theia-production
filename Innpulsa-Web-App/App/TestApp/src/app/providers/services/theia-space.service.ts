import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TheiaSpaceService {

  constructor() { }
  test(){
    console.log("Test funciona!");
  }
}
