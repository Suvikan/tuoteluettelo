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
}
