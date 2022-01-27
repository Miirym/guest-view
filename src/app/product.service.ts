import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Observable<Product[]> {
    const products = of(PRODUCTS);
    this.messageService.add('ProductService: fetched product');
    return products;
  }

  constructor(private messageService: MessageService) { }
}
