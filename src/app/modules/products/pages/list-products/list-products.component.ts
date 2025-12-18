import { Component, inject } from '@angular/core';
import { Product } from '../../interfaces/products.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-list-products.component',
  template: `<app-table-products [products]="products" ></app-table-products>`,
  standalone: false,
})
export class ListProductsComponent {
  products: Product[] = [];
  private productsService = inject(ProductsService);

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe({
      next: (products) => {
        this.products = products;
        console.log(products);
      },
      error: (error) => console.error(error),
    })
  }
}
