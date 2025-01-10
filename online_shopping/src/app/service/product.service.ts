import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../model/product.model';
import { Observable } from 'rxjs';
import { AddProductResponse } from '../model/add-product-response.model';
import { ProductResponse } from '../model/product-response.model';

@Injectable({
  providedIn: 'root'
})
export class productService {
  private baseUrl = 'https://host1.open.uom.lk/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  addProduct(product: product): Observable<AddProductResponse> {
    return this.http.post<AddProductResponse>(
      this.baseUrl + 'api/products',
      product,
      this.httpOptions
    );
  }

  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(
      this.baseUrl + 'api/products');
  }
}
