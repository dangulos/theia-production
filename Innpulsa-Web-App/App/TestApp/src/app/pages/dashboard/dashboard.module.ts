import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { DetailsModalComponent } from './modals/details-modal/details-modal.component';
import { UpdateModalComponent } from './modals/update-modal/update-modal.component';
import { CreateModalComponent } from './modals/create-modal/create-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule
  ],
  declarations: [DashboardPage, DetailsModalComponent, UpdateModalComponent, CreateModalComponent],
  entryComponents: [DetailsModalComponent, UpdateModalComponent,CreateModalComponent]
})
export class DashboardPageModule {}
