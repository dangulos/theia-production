import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheiaSpacePageRoutingModule } from './theia-space-routing.module';

import { TheiaSpacePage } from './theia-space.page';
import {UserData} from "../../providers/user-data";
import {TheiaSpaceService} from "../../providers/services/theia-space.service"
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheiaSpacePageRoutingModule,
    SharedModule
  ],
  declarations: [TheiaSpacePage],
  providers: [TheiaSpaceService,UserData]
})
export class TheiaSpacePageModule {}
