import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AirportListComponent} from "./airport-list/airport-list.component";
import {CityListComponent} from "./city-list/city-list.component";
import {CountryListComponent} from "./country-list/country-list.component";
import {HotelListComponent} from "./hotel-list/hotel-list.component";
import {ReservationListComponent} from "./reservation-list/reservation-list.component";
import {RoomListComponent} from "./room-list/room-list.component";
import {TicketListComponent} from "./ticket-list/ticket-list.component";
<<<<<<< HEAD
import {TourListComponent} from "./tour-list/tour-list.component";

=======
import {CountryFormComponent} from "./country-form/country-form.component";
import {CityFormComponent} from "./city-form/city-form.component";
import {AirportFormComponent} from "./airport-form/airport-form.component";
import {LoginComponent} from "./login/login.component";
import {HotelFormComponent} from "./hotel-form/hotel-form.component";
import {HomePageComponent} from "./home-page/home-page.component";
>>>>>>> ada7d73c37a0834561a0a3ac798fe4330559662e

const routes: Routes = [
  {path: 'airports', component: AirportListComponent},
  {path: 'create-airport', component: AirportFormComponent},
  {path: 'cities', component: CityListComponent},
  {path: 'create-city', component: CityFormComponent},
  {path: 'countries', component: CountryListComponent},
  {path: 'create-country', component: CountryFormComponent},
  {path: 'hotels', component: HotelListComponent},
  {path: 'create-hotel', component:HotelFormComponent},
  {path: 'reservations', component: ReservationListComponent},
  {path: 'rooms', component: RoomListComponent},
  {path: 'create-room', component: RoomListComponent},
  {path: 'tickets', component: TicketListComponent},
<<<<<<< HEAD
  {path: 'tours', component: TourListComponent},
=======
  {path: 'create-ticket', component: TicketListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home-page', component: HomePageComponent},
>>>>>>> ada7d73c37a0834561a0a3ac798fe4330559662e
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
