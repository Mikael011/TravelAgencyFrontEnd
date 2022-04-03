import { Component, OnInit } from '@angular/core';
import {AirportDTO} from "../../model/airportDTO";
import {ReservationService} from "../service/airport.service";

@Component({
  selector: 'app-airport-list',
  templateUrl: './airport-list.component.html',
  styleUrls: ['./airport-list.component.css']
})
export class AirportListComponent implements OnInit {

  airports: AirportDTO[] = [];

  constructor(private airportService: ReservationService) {
    this.airportService = airportService;
  }

  ngOnInit(): void {
    this.airportService.getAll().subscribe(succesfulResponse => {
      console.log("Successful response received " + succesfulResponse);
      this.airports = (succesfulResponse as AirportDTO[]);
    });
  }
}
