import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productURL= environment.apiResrURL + '/api/v1/product'

  constructor(private httpClient: HttpClient) { }

  //Obtenemos la lista de productos desde el back
  public list(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.productURL)
  }
  //Obtenemos un producto desde el back
  public detail(id: number): Observable<Product>{
    return this.httpClient.get<Product>(this.productURL + `/${id}`);
  }
  //Obtenemos el crear un producto desde el back
  public create(product: Product): Observable<any>{
    return this.httpClient.post<any>(this.productURL, product);
  }
  //Obtenemos el actualizar un producto desde el back
  public update(id: number, product: Product): Observable<any>{
    return this.httpClient.put<any>(this.productURL + `/${id}`, product);
  }
}
