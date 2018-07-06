import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './/welcome-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { StoreModule } from '@ngrx/store';
import * as fromWelcome from './store/reducers/welcome.reducer';

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    StoreModule.forFeature('welcome', fromWelcome.reducer),
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }
