import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosUsuPageRoutingModule } from './datos-usu-routing.module';

import { DatosUsuPage } from './datos-usu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosUsuPageRoutingModule
  ],
  declarations: [DatosUsuPage]
})
export class DatosUsuPageModule {}
