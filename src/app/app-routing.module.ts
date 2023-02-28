import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/phone-list', pathMatch: 'full' },
  { path: 'phone-list', component: PhoneListComponent },
  { path: 'item-detail/:id', component: ItemDetailComponent }

];

@NgModule({

  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }