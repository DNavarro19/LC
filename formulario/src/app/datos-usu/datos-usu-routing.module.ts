import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosUsuPage } from './datos-usu.page';

const routes: Routes = [
  {
    path: '',
    component: DatosUsuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosUsuPageRoutingModule {}
