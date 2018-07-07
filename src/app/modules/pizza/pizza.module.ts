import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaRoutingModule } from './/pizza-routing.module';
import { PizzaStatusComponent } from './components/pizza-status/pizza-status.component';
import { StoreModule } from '@ngrx/store';
import * as fromPizza from './store/reducers/pizza.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PizzaEffects } from '@app/modules/pizza/store/effects/pizza.effects';

@NgModule({
  imports: [
    CommonModule,
    PizzaRoutingModule,
    StoreModule.forFeature('pizza', fromPizza.reducer),
    EffectsModule.forFeature([PizzaEffects])
  ],
  declarations: [PizzaStatusComponent]
})
export class PizzaModule { }
