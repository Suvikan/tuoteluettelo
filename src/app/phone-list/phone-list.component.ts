import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
  PhoneList: any = [];


  constructor(private service: PhoneService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  
  getProducts(): void { 
    this.service.getPhoneDetails().subscribe(data=>{
      this.PhoneList = data;
    })
  }

}
