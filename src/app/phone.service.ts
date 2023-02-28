import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private http: HttpClient) { }

  GetPhoneDetails() {
    return this.http.get('../assets/phones/phones.json');
  }

  getAllProducts(): any {

    const products = this.http.get('assets/phones/phones.json');

    return products;
  }

  getProduct(id: string):any {
    const product = this.http.get('assets/phones/'+id+'.json');
    return product;
  }
}
