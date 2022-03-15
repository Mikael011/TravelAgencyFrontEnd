import { Component, OnInit } from '@angular/core';
import {CountryDTO} from "../../model/countryDTO";
import {CountryService} from "../service/country.service";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries : CountryDTO[] = [];

  constructor(private countryService: CountryService) {
    this.countryService = countryService;
  }

  ngOnInit(): void {
    this.countryService.getAll().subscribe(succesfulRsponse => {
      console.log("Successful response received " + succesfulRsponse);
      this.countries = (succesfulRsponse as CountryDTO[]);
    });
  }
}

