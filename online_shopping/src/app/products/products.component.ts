import { Component, OnInit } from '@angular/core';
import { productService } from '../service/product.service';
import { product } from '../model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public rowIndex!: number;
  showAddProduct!: boolean;
  isLoading: boolean = false;


  constructor(private ProductService: productService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public products:product[] = [];

/*
  public products = [
    {
      productId: '001',
      productName: 'White Basmathi Rice',
      createdDate: '2020.01.29',
      quantity: 100,
      unitPrice: '400',
      productDescription:
        'White Basmathi Rice imported from pakistan. High quality rice with extra fragnance. Organically grown.',
    },
    {
      productId: '002',
      productName: 'Sugar',
      createdDate: '2020.01.29',
      quantity: 1200,
      unitPrice: '200',
      productDescription: 'White sugar manufactured by Palwatte Factory',
    },
    {
      productId: '003',
      productName: 'Flour',
      createdDate: '2020.01.29',
      quantity: 50,
      unitPrice: '190',
      productDescription: 'Super FIne Whole grain general Purpose flour ',
    },
    {
      productId: '004',
      productName: 'Dhal',
      createdDate: '2020.01.29',
      quantity: 10,
      unitPrice: '200',
      productDescription: 'Imported mysoor dhal from India',
    },
  ];
  */

  public selectProduct(selectedRow: number) {
    this.rowIndex = selectedRow;
  }

  showAddProducts() {
    this.showAddProduct = true;
  }

  hideAddProducts() {
    this.showAddProduct = false;
  }

  refresh() {
    this.getProducts();
  }

  getProducts() {
    this.isLoading = true;
    this.ProductService.getProducts().subscribe((res) => {
      this.products = res.data;
      this.isLoading = false;
    });
  }
    
}
