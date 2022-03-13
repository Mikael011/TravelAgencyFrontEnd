import { Component, OnInit } from '@angular/core';
import {AirportDTO} from "../../model/airportDTO";
import {AirportService} from "../service/airport.service";

@Component({
  selector: 'app-airport-list',
  templateUrl: './airport-list.component.html',
  styleUrls: ['./airport-list.component.css']
})
export class AirportListComponent implements OnInit {

  airport: AirportDTO[] = [];

  constructor(private airportService: AirportService) {
    this.airportService = airportService;
  }

  ngOnInit(): void {
    this.airportService.getAll().subscribe(succesfulRsponse => {
      console.log("Successful response received " + succesfulRsponse);
      this.airport = (succesfulRsponse as AirportDTO[]);
    });
  }
}
