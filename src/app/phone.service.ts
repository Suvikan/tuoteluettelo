import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private http: HttpClient) { }

  getPhoneDetails() {
    return this.http.get('assets/phones/phones.json');
  }

  getAllProducts(): any {

    return this.http.get('assets/phones/phones.json');
  }

  getProduct(id: string):any {
    return this.http.get('assets/phones/'+id+'.json');
  }
}
