import { Component, OnInit } from '@angular/core';
import {AirportService} from "../service/airport.service";
import {CityService} from "../service/city.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {CityDTO} from "../../model/cityDTO";
import {AirportCreateDTO} from "../../model/airportCreateDTO";

@Component({
  selector: 'app-airport-form',
  templateUrl: './airport-form.component.html',
  styleUrls: ['./airport-form.component.css']
})
export class AirportFormComponent implements OnInit {

  constructor(private airportService: AirportService, private cityService: CityService, private router:Router) { }

  airportCreateDTO : AirportCreateDTO = new AirportCreateDTO();

  // airportForm = new FormGroup({
  //   name: new FormControl(''),
  //   city: new FormControl('')
  // })

  ngOnInit(): void {
    this.getCities();
  }
  cities : CityDTO[] = [];
  airportForm: any;
  getCities(){
    this.cityService.getAll().subscribe(response => {
      this.cities = response as CityDTO[];
    })
  }

  onSubmit() {
    //const submitMessage = "Name: " + this.airportForm.get('name')?.value;
    // alert(submitMessage);



    this.airportService.create(this.airportCreateDTO).subscribe(response => {
      // alert(response);
      this.router.navigate(['airports']);
    })

  }

}
