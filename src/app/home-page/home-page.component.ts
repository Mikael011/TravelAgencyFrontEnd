import { Component, OnInit } from '@angular/core';
import {AirportService} from "../service/airport.service";
import {Router} from "@angular/router";
import {AirportDTO} from "../../model/airportDTO";
import {CreateReservationRequestDTO} from "../../model/createReservationRequestDTO";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private airportService: AirportService, private router:Router) { }
  searchDestString : string = "";
  searchStartString : string = "";
  airports: AirportDTO[] = [];
  reservationRequest : CreateReservationRequestDTO = new CreateReservationRequestDTO();
  selectedStart : AirportDTO = new AirportDTO();
  selectedEnd : AirportDTO = new AirportDTO();
  ngOnInit(): void {
  }

  onDestTextChanged(){
    this.airportService.searchAirportsByText(this.searchDestString).subscribe(response => {
      this.airports = response as AirportDTO[];
    })
  }

  onStartTextChanged(){
    this.airportService.searchAirportsByText(this.searchStartString).subscribe(response => {
      this.airports = response as AirportDTO[];
    })
  }

  setStart(airport  : AirportDTO){
     this.reservationRequest.startAirportId = airport.id ;
     this.selectedStart = airport;
  }

  setDest(airport  : AirportDTO){
    this.reservationRequest.destAirportId  = airport.id ;
    this.selectedEnd = airport;
  }

  submit(){
    this.reservationRequest.submitted = true;
  }



}
