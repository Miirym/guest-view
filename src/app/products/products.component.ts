import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../mock-products';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // product: Product = {
  //   id: 1,
  //   name: 'Pizza Fungi',
  //   price: 1234,
  //   description: 'much champignons, very delicious'
  // };
  products = PRODUCTS;
  selectedProduct?: Product;

  constructor() { }

  ngOnInit(): void {
  }

  // click event handler
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

like(product: Product){
  product.likes_count?product.likes_count++:1;
}

dislike(product: Product){
  product.dislikes_count?product.dislikes_count++:1;
  console.log(product.dislikes_count);
}

// rating(product: Product){
//   return Math.round(product.likes_count&&product.dislikes_count?((product.likes_count/(product.likes_count+product.dislikes_count))*0.2);
// }

}
