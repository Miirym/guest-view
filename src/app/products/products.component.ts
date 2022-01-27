import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = []
  // selectedProduct?: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  // retrieve products array from service asynchronusly
  getProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  // click event handler
  // onSelect(product: Product): void {
  //   this.selectedProduct = product;
  //   this.messageService.add(`ProductComponent: Selected product id=${product.id}`);
  // }



  // order methodes should be implemented
  // order(product: Product){
  //   ordercount += ordercount;
  // }

  // remove(product: Product){
  //   ordercount -= ordercount;
  // }

  // rating(product: Product){
  //   return Math.round(product.likes_count&&product.dislikes_count?((product.likes_count/(product.likes_count+product.dislikes_count))*0.2);
  // }

}
