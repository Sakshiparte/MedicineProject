import { Component } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
   constructor(private productServices:ProductService){}

  Products =[
    {
      id:1,
      name:{brand_name:"Cipla",model_name:"ACI FREE (LEMON)"},
      Description:"SVARJIKSARA 2.904G + NIMBUKAMLAM 2.015G + SODIUM SACCHARIN 12 MG/5G",
      Type:"Gel",
      price:400,
      category:"medicine",
      img:"./assets/images/tablet1.webp"
    },
    {
      id:2,
      name:{brand_name:"Anta",model_name:"ACI FREE (PUDINA)"},
      Description:"SVARJIKSARA 2.913G + NIMBUKAMLAM 2.041G + SODIUM SACCHARIN 15 MG/5G",
      Type:"Gel",
      price:300,
      category:"medicine",
      img:"./assets/images/tablet2.jpg"
    },
    {
      id:3,
      name:{brand_name:"Msr",model_name:"ACI FREE (REGULAR)"},
      Description:"SVARJIKSARA 2.90G + NIMBUKAMLAM 2.10G",
      Type:"Gel",
      price:319,
      category:"medicine",
      img:"./assets/images/tablet3.webp"
    },
    {
      id:4,
      name:{brand_name:"Csgo",model_name:"ACI FREE (ZEERA)"},
      Description:"SVARJIKSARA 2.7764 G + NIMBUKAMLAM 2.0286 G + JEERA 0.01 G + EXCIPIENTS Q.S + SODIUM SACCHARIN IP 20 MG/5G",
      Type:"Gel",
      price:300,
      category:"medicine",
      img:"./assets/images/tablet4.avif"
    },
    {
      id:5,
      name:{brand_name:"Zen",model_name:"ACIGENE GEL 170ML MINT"},
      Description:"MAGNESIUM HYDROXIDE IP 200 MG + SIMETHICONE 50 MG + DRIED AL. HYDROXIDE IP 250 MG / 10ML",
      Type:"Gel",
      price:300,
      category:"medicine",
      img:"./assets/images/syrup5.avif"
    },
    {
      id:6,
      name:{brand_name:"Cipla",model_name:"DIGUSIL MPS (MINT)"},
      Description:"DRIED ALUMINIUM HYDROXIDE GEL I.P. 250MG + MAGNESIUM HYDROXIDE IP 200MG + SIMETHICONE IP 50MG",
      Type:"LiGelquid",
      price:300,
      category:"medicine",
      img:"./assets/images/syrup6.webp"
    },
    {
      id:7,
      name:{brand_name:"Ustraa",model_name:"DRY SKIN"},
      Description:"Face Wash - Dry Skin (Mint Cool) - 200g",
      Type:"Gel",
      price:300,
      category:"skincare",
      img:"./assets/images/1f.webp"
    },
    {
      id:8,
      name:{brand_name:"Simple",model_name:"REFRESHING FACIAL WASH"},
      Description:"DRIED ALUMINIUM HYDROXIDE GEL I.P. 250MG",
      Type:"Gel",
      price:300,
      category:"skincare",
      img:"./assets/images/2f.jpeg"
    },
    {
      id:9,
      name:{brand_name:"Wipeout",model_name:"FACE WASH"},
      Description:"MAGNESIUM HYDROXIDE IP 200MG",
      Type:"Gel",
      price:300,
      category:"skincare",
      img:"./assets/images/3f.jpg"
    },
    {
      id:10,
      name:{brand_name:"Ponds",model_name:"DRY SKIN"},
      Description:"Ponds Bright Beauty Facewash for Spotless Glow",
      Type:"Gel",
      price:300,
      category:"skincare",
      img:"./assets/images/4f.jpg"
    },
    {
      id:11,
      name:{brand_name:"Lotus",model_name:"Lotus Radiance Boost"},
      Description:"Lotus Herbals Radiance Boost Ubtan Facewash",
      Type:"Gel",
      price:300,
      category:"skincare",
      img:"./assets/images/5f.jpg"
    },
    {
      id:12,
      name:{brand_name:"Beardo",model_name:"Beardo Ultimate Facewash"},
      Description:"Beardo Ultimate Facewash Trio",
      Type:"Gel",
      price:300,
      category:"skincare",
      img:"./assets/images/6f.jpg"
    },
  ];
  
  add_to_cart(){
    this.productServices.addToCart();
  }


//filter search
  filter_products=this.Products;
  filterproducts(category:String)
  {
    if (category=='all')
    {
      this.filter_products=this.Products;
    }
    else
    {
      this.filter_products=this.Products.filter(product=>product.category==category);
    }
  }

  _product_name=""
  get product_name()
  {
    return this._product_name
  }
  set product_name(Product:string)
  {
    this._product_name=Product
    console.log(this._product_name)
    this.filter_products=this.Products.filter(product=>product.name.brand_name.toLocaleLowerCase().includes(this._product_name));
  }

}
