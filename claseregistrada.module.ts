import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaseregistradaPageRoutingModule } from './claseregistrada-routing.module';

import { ClaseregistradaPage } from './claseregistrada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaseregistradaPageRoutingModule
  ],
  declarations: [ClaseregistradaPage]
})
export class ClaseregistradaPageModule {}
