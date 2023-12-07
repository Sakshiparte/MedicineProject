import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdernowComponent } from './app/ordernow/ordernow.component';

const routes: Routes = [
  {
    path:'login',
    component: OrdernowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
