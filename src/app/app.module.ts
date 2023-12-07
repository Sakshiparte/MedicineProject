import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OrdernowComponent } from './ordernow/ordernow.component';
import { ContactComponent } from './contact/contact.component';
import { ProductService } from './product.service';


const routes:Routes=[
  {path:" ",component:HomeComponent},
  {path:"product",component:ProductsComponent},
  {path:"home",component:HomeComponent},
  {path:"contact",component:ContactComponent},
  {path:"ordernow/:id",component:OrdernowComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
