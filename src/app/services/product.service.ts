import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../products/product';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private http = inject(HttpClient);

  /*getJsonData(): Observable<Product[]> {
    return this.http.get<Product[]>(`/api/s7BR0Dy`);
  }
  getJavaBackendData(): Observable<Product[]> {
    return this.http.get<Product[]>(`/api/products/getAll`);
  }*/
  getNodeBackendData(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/data`);
  }

}
