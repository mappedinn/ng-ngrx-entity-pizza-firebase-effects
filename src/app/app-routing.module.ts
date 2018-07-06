import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '/questionnaires', pathMatch: 'full' },
  { path: '', loadChildren: 'app/modules/welcome/welcome.module#WelcomeModule' },
  { path: 'pizza', loadChildren: 'app/modules/pizza/pizza.module#PizzaModule' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
