import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing-module';

import { ListProductsComponent } from './pages/list-products/list-products.component';
import { TableProductsComponent } from './components/table-products/table-products.component';
import { SharedModule } from '../../shared/shared-module';



@NgModule({
  declarations: [
    ListProductsComponent,
    TableProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
