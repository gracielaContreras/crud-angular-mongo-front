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
}
