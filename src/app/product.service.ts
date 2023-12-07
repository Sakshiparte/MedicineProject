import { Subject } from 'rxjs';


export class ProductService{
   
    constructor() {}

 // ADD TO CART LOGIC
  private cart_value=0
  private cart_value$=new Subject<number>()
  
  addToCart()
  {
    this.cart_value++
    this.cart_value$.next(this.cart_value)
  }
  getcartvalue()
  {
    return this.cart_value$
  }

}