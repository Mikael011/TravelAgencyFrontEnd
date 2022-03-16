import { Component, OnInit } from '@angular/core';
import {AirportDTO} from "../../model/airportDTO";
import {AirportService} from "../service/airport.service";

@Component({
  selector: 'app-airport-list',
  templateUrl: './airport-list.component.html',
  styleUrls: ['./airport-list.component.css']
})
export class AirportListComponent implements OnInit {

  airports: AirportDTO[] = [];

  constructor(private airportService: AirportService) {
    this.airportService = airportService;
  }

  ngOnInit(): void {
    this.airportService.getAll().subscribe(succesfulResponse => {
      console.log("Successful response received " + succesfulResponse);
      this.airports = (succesfulResponse as AirportDTO[]);
    });
  }
}
