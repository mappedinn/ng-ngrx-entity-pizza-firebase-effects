import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaRoutingModule } from './/pizza-routing.module';
import { PizzaStatusComponent } from './components/pizza-status/pizza-status.component';

@NgModule({
  imports: [
    CommonModule,
    PizzaRoutingModule
  ],
  declarations: [PizzaStatusComponent]
})
export class PizzaModule { }
