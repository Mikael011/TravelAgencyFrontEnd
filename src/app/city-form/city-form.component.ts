import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CountryService} from "../service/country.service";
import {Router} from "@angular/router";
import {CityService} from "../service/city.service";

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css']
})
export class CityFormComponent implements OnInit {

  cityForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  constructor(private cityService: CityService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const submitMessage = "Name: " + this.cityForm.get('name')?.value;
    // alert(submitMessage);

    const cityDto = {
      name: this.cityForm.get('name')?.value,
    };

    this.cityService.create(cityDto).subscribe(response => {
      // alert(response);
      this.router.navigate(['cities']);
    })

  }

}
