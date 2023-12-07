import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private productsServices:ProductService){ }
//Declare the cart_value
 
cartvalue:number=0;

  ngOnInit(): void {
     //get update cart value
     this.productsServices.getcartvalue().subscribe(val=>this.cartvalue=val)

  }

}
