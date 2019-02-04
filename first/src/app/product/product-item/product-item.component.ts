import { Component, OnInit } from '@angular/core';

import { Product } from '../../model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public product: Product;

  constructor() { }

  ngOnInit() {
    this.product = new Product('panties',80,85)
  }

  addToCart(event){
    console.log('we are addingthistoCart', event);

    //this should be something to add it to cart. 
    this.product.onSale = !this.product.onSale;
  }

}
