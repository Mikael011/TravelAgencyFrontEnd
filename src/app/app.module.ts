import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { AirportListComponent } from './airport-list/airport-list.component';
import {CityListComponent} from "./city-list/city-list.component";
import {CountryListComponent} from "./country-list/country-list.component";
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { RoomListComponent } from './room-list/room-list.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AirportListComponent,
    CityListComponent,
    CountryListComponent,
    HotelListComponent,
    ReservationListComponent,
    RoomListComponent,
    TicketListComponent,
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
