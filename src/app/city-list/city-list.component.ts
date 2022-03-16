import { Component, OnInit } from '@angular/core';
import {CityDTO} from "../../model/cityDTO";
import {CityService} from "../service/city.service";

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  cities: CityDTO[] = [];

  constructor(private cityService: CityService) {
    this.cityService = cityService;
  }

  ngOnInit(): void {
    this.cityService.getAll().subscribe(succesfulRsponse => {
      console.log("Successful response received " + succesfulRsponse);
      this.cities = (succesfulRsponse as CityDTO[]);
    });
  }
}
