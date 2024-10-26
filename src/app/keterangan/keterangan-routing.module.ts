import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeteranganPage } from './keterangan.page';

const routes: Routes = [
  {
    path: '',
    component: KeteranganPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KeteranganPageRoutingModule {}
