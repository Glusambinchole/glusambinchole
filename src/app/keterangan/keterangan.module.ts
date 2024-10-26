import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KeteranganPageRoutingModule } from './keterangan-routing.module';

import { KeteranganPage } from './keterangan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KeteranganPageRoutingModule
  ],
  declarations: [KeteranganPage]
})
export class KeteranganPageModule {}
