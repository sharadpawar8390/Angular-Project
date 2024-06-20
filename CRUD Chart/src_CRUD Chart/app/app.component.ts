import { Component, ViewChild } from '@angular/core';
import { ProductTableComponent } from './product-table/product-table.component';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  @ViewChild(ProductTableComponent) productTableComponent!: ProductTableComponent;
  products: Product[] = [];

  updateChart(): void 
  {
    this.products = [...this.productTableComponent.products];
  }
}
