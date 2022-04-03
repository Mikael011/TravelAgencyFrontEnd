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
<<<<<<< HEAD
import {FormsModule} from "@angular/forms";
import { TourListComponent } from './tour-list/tour-list.component';
=======
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TravelFormComponent } from './travel-form/travel-form.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonModule} from "@angular/material/button";
import { CountryFormComponent } from './country-form/country-form.component';
import { CityFormComponent } from './city-form/city-form.component';
import { AirportFormComponent } from './airport-form/airport-form.component';
import { HotelFormComponent } from './hotel-form/hotel-form.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import { RoomFormComponent } from './room-form/room-form.component';
import { TravelListComponent } from './travel-list/travel-list.component';

>>>>>>> ada7d73c37a0834561a0a3ac798fe4330559662e


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
<<<<<<< HEAD
    TourListComponent,
=======
    TravelFormComponent,
    CountryFormComponent,
    CityFormComponent,
    AirportFormComponent,
    HotelFormComponent,
    LoginComponent,
    HomePageComponent,
    ReservationFormComponent,
    TicketFormComponent,
    RoomFormComponent,
    TravelListComponent,
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
>>>>>>> ada7d73c37a0834561a0a3ac798fe4330559662e
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
