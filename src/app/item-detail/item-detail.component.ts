import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PhoneService } from '../phone.service';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  phoneId: string = '';
  PhoneList: any[] | undefined;
  chosenPhone: any = '';
  faCheck = faCheck;
  faMinus = faMinus;
  newImgSrc: string = '';
  allReady: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private phoneService: PhoneService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPhone();
  }

  getPhone(): void {
    this.phoneId = this.route.snapshot.params['id'];

    this.route.params.subscribe((params) => {
      this.phoneId = params['id'];
    });
    this.phoneService.getProduct(this.phoneId).subscribe((data: any) => {
      this.chosenPhone = data;
      this.allReady = true;
    });


  }

  goBack(): void {
    this.location.back();
  }

  changeImg(event: any) {
    this.newImgSrc = event.target.getAttribute('src');
    document.getElementById('view-img')?.setAttribute('src', this.newImgSrc);
  }
}