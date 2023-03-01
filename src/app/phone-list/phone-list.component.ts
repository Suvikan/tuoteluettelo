import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css'],
})
export class PhoneListComponent implements OnInit {
  PhoneList: any = [];
  filterTerm!: string;
  selectedSort: string = '';
  order: string ='';

  constructor(private service: PhoneService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.service.getPhoneDetails().subscribe((data) => {
      this.PhoneList = data;
    });
  }

  sortByNewest() {
    this.PhoneList.sort((a: any, b: any) => b.age - a.age);
  }
  sortByOldest() {
    this.PhoneList.sort((a: any, b: any) => a.age - b.age);
  }
  sortByAlphabet() {
    this.PhoneList.sort((a:any, b:any) => a.name.localeCompare(b.name));
  }

  sort(event: any){
    console.log(event);
    let option = event.target.value;
    if (option === "oldest") {
      this.sortByOldest();
      console.log("old")
    } 
    else if (option === "alphabetical") {
      this.sortByAlphabet();
      console.log("alph")
    }
    else if (option == "newest") {
      this.sortByNewest();
      console.log("new")
    }
  }

  
}
