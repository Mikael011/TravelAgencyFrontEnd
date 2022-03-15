import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomListComponent } from './room-list/room-list.component';
import {HttpClientModule} from "@angular/common/http";
import { CountryListComponent } from './country-list/country-list.component';
import { CountryComponent } from './country/country.component';
import { CityListComponent } from './city-list/city-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomListComponent,
    CountryListComponent,
    CountryComponent,
    CityListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
