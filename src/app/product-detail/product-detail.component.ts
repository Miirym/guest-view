import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})



export class ProductDetailComponent implements OnInit {
  product: Product| undefined;
  
  constructor(  private route: ActivatedRoute, private productService: ProductService, private location: Location) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }
  
  like(product: Product){
    product.likes_count?product.likes_count++:1;
  }
  
  dislike(product: Product){
    product.dislikes_count?product.dislikes_count++:1;
    console.log(product.dislikes_count);
  }

  goBack(): void {
    this.location.back();
  }
}
