import { Component } from '@angular/core';
import { product } from '../products';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ordernow',
  templateUrl: './ordernow.component.html',
  styleUrls: ['./ordernow.component.scss']
})
export class OrdernowComponent {
//  user:product = new product()
//   userForm !:FormGroup;
//   constructor(private productService:ProductService, private router:Router,private formBuilder:FormBuilder){}

//   ngOnInit():void
//   {
//     this.userForm=this.formBuilder.group({
//       OrderName:['',[Validators.minLength(3),Validators.maxLength(10),Validators.required]]
//      // Price:['',]
//      // Quatity:[]
//     })
//  }
//  get Order():FormGroup
//  {
//    return this.userForm.get("Order") as FormGroup
 
// }
// submitData()
// }
}
