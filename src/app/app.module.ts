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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TravelFormComponent } from './travel-form/travel-form.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonModule} from "@angular/material/button";
import { CountryFormComponent } from './country-form/country-form.component';
import { CityFormComponent } from './city-form/city-form.component';
import { AirportFormComponent } from './airport-form/airport-form.component';



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
    TravelFormComponent,
    CountryFormComponent,
    CityFormComponent,
    AirportFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
