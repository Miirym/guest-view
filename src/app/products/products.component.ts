import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { MessageService } from '../message.service';


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

  products: Product[] = []
  selectedProduct?: Product;

  constructor(private productService: ProductService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  // click event handler
  onSelect(product: Product): void {
    this.selectedProduct = product;
    this.messageService.add(`ProductComponent: Selected product id=${product.id}`);
  }

  // retrieve products array from service asynchronusly
  getProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

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
