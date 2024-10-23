import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciciosPage } from './exercicio.page';

const routes: Routes = [
  {
    path: '',
    component: ExerciciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercicioPageRoutingModule {}
