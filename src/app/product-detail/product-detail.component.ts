import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})



export class ProductDetailComponent implements OnInit {
  //receive product property
  @Input() product?: Product;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  like(product: Product){
    product.likes_count?product.likes_count++:1;
  }
  
  dislike(product: Product){
    product.dislikes_count?product.dislikes_count++:1;
    console.log(product.dislikes_count);
  }
}
