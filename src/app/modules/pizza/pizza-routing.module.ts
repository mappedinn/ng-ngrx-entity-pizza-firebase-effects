import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PizzaStatusComponent } from './components/pizza-status/pizza-status.component';

const routes: Routes = [
  { path: '', component: PizzaStatusComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class PizzaRoutingModule {
  static components = [PizzaStatusComponent];
}
