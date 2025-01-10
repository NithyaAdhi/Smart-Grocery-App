import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { product } from '../model/product.model';
import { productService } from '../service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {

  ngOnInit(): void {

  }

  constructor(private fb: FormBuilder,
    private ProductService :productService) {}

  productFrom = this.fb.group({
   
    productName: ['', Validators.required],
    description: ['', Validators.required],
    category: ['', Validators.required],
    brand: ['', Validators.required],
    expiredDate: ['', Validators.required],
    manufacturedDate: ['', Validators.required],
    batchNumber: ['', Validators.required],
    unitPrice: ['', [Validators.required, Validators.min(1)]],
    quantity: ['', [Validators.required, Validators.min(50)]],
    createdDate: ['', Validators.required],
  });

  isDataUploading = false;

  get f() {
    return this.productFrom.controls;
  }

  onSubmit() {
    const values = this.productFrom.value as Partial <product>;
    values.createdDate = new Date().toDateString();
    this.isDataUploading = true;
    this.ProductService.addProduct(values as product).subscribe((res) => {
      debugger;
      this.isDataUploading = false;
      this.productFrom.reset();
    });
  }
  
}
