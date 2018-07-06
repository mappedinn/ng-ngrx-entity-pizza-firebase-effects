import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: '',  component: WelcomeComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [ ]
})

export class WelcomeRoutingModule {
  static components = [ WelcomeComponent ];
}
