import { Component, OnInit } from '@angular/core';
import {CityDTO} from "../../model/cityDTO";
import {CityService} from "../service/city.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  cities: CityDTO[] = [];

  constructor(private cityService: CityService, private httpClient: HttpClient) {
    this.cityService = cityService;
  }

  ngOnInit(): void {
    // this.httpClient.get('http://localhost:8081/api/cities').subscribe(springResponse => {
    //   this.events = springResponse;
    // });

    this.cityService.getAll().subscribe(succesfulRsponse => {
      // success = HttpStatus OK
      console.log("Successful response received " + succesfulRsponse);
      this.cities = (succesfulRsponse as CityDTO[]);
      // this.cities = succesfulRsponse; //asa nu este ok
    });
  }
}
