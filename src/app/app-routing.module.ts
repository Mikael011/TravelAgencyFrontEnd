import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AirportListComponent} from "./airport-list/airport-list.component";
import {CityListComponent} from "./city-list/city-list.component";
import {CountryListComponent} from "./country-list/country-list.component";
import {HotelListComponent} from "./hotel-list/hotel-list.component";
import {ReservationListComponent} from "./reservation-list/reservation-list.component";
import {RoomListComponent} from "./room-list/room-list.component";
import {TicketListComponent} from "./ticket-list/ticket-list.component";
import {TourListComponent} from "./tour-list/tour-list.component";


const routes: Routes = [
  {path: 'airports', component: AirportListComponent},
  {path: 'cities', component: CityListComponent},
  {path: 'countries', component: CountryListComponent},
  {path: 'hotels', component: HotelListComponent},
  {path: 'reservations', component: ReservationListComponent},
  {path: 'rooms', component: RoomListComponent},
  {path: 'tickets', component: TicketListComponent},
  {path: 'tours', component: TourListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
