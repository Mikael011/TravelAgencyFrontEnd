import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomListComponent } from './room-list/room-list.component';
import {HttpClientModule} from "@angular/common/http";
import { AirportListComponent } from './airport-list/airport-list.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomListComponent,
    AirportListComponent,
    TicketListComponent,
    HotelListComponent,
    ReservationListComponent,
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
