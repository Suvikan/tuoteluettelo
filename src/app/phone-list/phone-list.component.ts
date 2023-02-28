import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent {
  PhoneDetailes: any = [];

  constructor(private service: PhoneService) {}

  ngOnInit() { 
    this.service.GetPhoneDetails().subscribe(data=>{
      this.PhoneDetailes = data;
    })
  }

}
