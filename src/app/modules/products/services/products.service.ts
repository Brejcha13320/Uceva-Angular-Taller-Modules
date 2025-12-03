import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { PRODUCTS } from '../../../core/config/products.config';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  getAllProducts(){
    return of(PRODUCTS);
  }
}
