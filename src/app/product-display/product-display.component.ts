import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  constructor(public productService:ProductService) { }

  // productModel = new Product();

  product:Product[] = [];
  

  ngOnInit(): void {
    this.product = this.productService.getCustomerData();
  }

}
