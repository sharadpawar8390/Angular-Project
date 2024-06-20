import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  products: Product[] = [];
  productForm: FormGroup;
  isEditing: boolean = false;
  selectedProduct: Product | null = null;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0.01)]],
      category: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.products = [];
  }

  addProduct(): void {
    if (this.productForm.valid) {
      const newProduct: Product = {
        id: this.products.length + 1,
        ...this.productForm.value
      };
      this.products.push(newProduct);
      this.productForm.reset();
      this.updateChart();
    }
  }

  editProduct(product: Product): void {
    this.isEditing = true;
    this.selectedProduct = product;
    this.productForm.patchValue(product);
  }

  updateProduct(): void {
    if (this.selectedProduct && this.productForm.valid) {
      const index = this.products.findIndex(p => p.Id === this.selectedProduct!.Id);
      this.products[index] = {
        id: this.selectedProduct!.Id,
        ...this.productForm.value
      };
      this.isEditing = false;
      this.selectedProduct = null;
      this.productForm.reset();
      this.updateChart();
    }
  }

  deleteProduct(product: Product): void {
    this.products = this.products.filter(p => p.Id !== product.Id);
    this.updateChart();
  }

  updateChart(): void {
    // Emit event or directly call chart component method
  }
}
