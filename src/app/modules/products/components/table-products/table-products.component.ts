import { Component, Input } from '@angular/core';
import { Category, Product } from '../../interfaces/products.interface';
import { BadgeType } from '../../../../shared/interfaces/badge.interface';

@Component({
  selector: 'app-table-products',
  standalone: false,
  templateUrl: './table-products.component.html',
  styleUrl: './table-products.component.scss',
})
export class TableProductsComponent {
  @Input() products: Product[] = [];

  categoryMap: Record<Category, BadgeType> = {
    'Carnes' : 'danger',
    'Frutas': 'warning',
    'Lacteos': 'primary',
    'Verduras': 'success',
  }

}
