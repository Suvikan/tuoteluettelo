import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PhoneListComponent } from './phone-list/phone-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
