import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThiaBarComponent } from './thia-bar/thia-bar.component';




@NgModule({
  declarations: [ThiaBarComponent],
  imports: [
    CommonModule
  ], 
  exports: [ThiaBarComponent]
})
export class SharedModule { }
