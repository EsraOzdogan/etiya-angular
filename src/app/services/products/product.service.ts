import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Product from 'src/app/models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // apiUrl = "http://http://localhost:3000"

  // apiUrl : string = environment.apiUrl;

  apiControllerUrl : string = `${environment.apiUrl}/products`;

  constructor(private httpClient: HttpClient) { }


  // getList(): Observable<Product[]> {
  //   return this.httpClient.get<Product[]>(`${this.apiUrl}/products`);
  // }

  // // getList(): any {   //any geri dönüs tipi
  // //   return "Yazı"
  // // }

  // getByıd(id:number): Observable<Product[]> {
  //   return this.httpClient.get<Product[]>(`${this.apiUrl}/products/${id}`);
  // }


  getList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.apiControllerUrl}`);
  }

  // getList(): any {   //any geri dönüs tipi
  //   return "Yazı"
  // }

  getByıd(id:number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.apiControllerUrl}/${id}`);
  }


}
