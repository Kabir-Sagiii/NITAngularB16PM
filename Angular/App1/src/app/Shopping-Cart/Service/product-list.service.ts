import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http:HttpClient) { }
     getAllProductData() {
      return fetch("https://fakestoreapi.com/products")
     }
     getAllElectronicDetails():Observable<any> {
       return  this.http.get<any>("https://fakestoreapi.com/products/category/electronics")
     }
}
