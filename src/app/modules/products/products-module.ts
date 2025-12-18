import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@modules-shared/shared-module';
import { TableProductsComponent } from './components/table-products/table-products.component';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { ProductsRoutingModule } from './products-routing-module';

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
