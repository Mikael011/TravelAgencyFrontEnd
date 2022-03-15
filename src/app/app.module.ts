import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {CityListComponent} from "./city-list/city-list.component";
import {CountryListComponent} from "./country-list/country-list.component";
import {AirportListComponent} from "./airport-list/airport-list.component";
import {RoomListComponent} from "./room-list/room-list.component";
import {NgModule} from "@angular/core";
import {TicketListComponent} from "./ticket-list/ticket-list.component";

@NgModule({
  declarations: [
    AppComponent,
    RoomListComponent,
    AirportListComponent,
    TicketListComponent,
    CountryListComponent,
    CityListComponent

  ],
  imports:  [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
