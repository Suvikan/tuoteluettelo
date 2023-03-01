import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css'],
})
export class PhoneListComponent implements OnInit {
  phoneList: any = [];
  filterTerm!: string;
  selectedSort: string = '';
  order: string ='';

  constructor(private service: PhoneService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.service.getPhoneDetails().subscribe((data) => {
      this.phoneList = data;
    });
  }

  sortByNewest() {
    this.phoneList.sort((a: any, b: any) => b.age - a.age);
  }
  sortByOldest() {
    this.phoneList.sort((a: any, b: any) => a.age - b.age);
  }
  sortByAlphabetA() {
    this.phoneList.sort((a:any, b:any) => a.name.localeCompare(b.name));
  }
  sortByAlphabetZ() {
    this.phoneList.sort((a:any, b:any) => b.name.localeCompare(a.name));
  }

  sort(event: any){
    let option = event.target.value;
    if (option === "oldest") {
      this.sortByOldest();
    } 
    else if (option == "newest") {
      this.sortByNewest();
    }
    else if (option === "alpha-a") {
      this.sortByAlphabetA();
    }
    else if (option === "alpha-z") {
      this.sortByAlphabetZ();
    }
    
  }

  
}
