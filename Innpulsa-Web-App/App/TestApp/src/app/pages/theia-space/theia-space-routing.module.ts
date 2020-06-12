import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheiaSpacePage } from './theia-space.page';

const routes: Routes = [
  {
    path: '',
    component: TheiaSpacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheiaSpacePageRoutingModule {}
