import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaseregistradaPage } from './claseregistrada.page';

const routes: Routes = [
  {
    path: '',
    component: ClaseregistradaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaseregistradaPageRoutingModule {}
