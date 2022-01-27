import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from './product';
import { PRODUCTS } from './mock-products';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private messageService: MessageService) { }

  //get product list
  getProducts(): Observable<Product[]> {
    const products = of(PRODUCTS);
    this.messageService.add('ProductService: fetched product');
    return products;
  }

  //get a product by id
  getProduct(id: number): Observable<Product> {
    const product = PRODUCTS.find(p => p.id === id)!;
    this.messageService.add(`PRODUCTService: fetched product id=${id}`);
    return of(product);
  }

}
