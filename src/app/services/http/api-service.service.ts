import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductItem } from 'src/app/shared/models/product-list/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly _http: HttpClient) 
  { 
  }

  public getShoppingListData(): Observable<ProductItem[]>{
    return this._http.get<any>('../../assets/data.json');
  }
}
