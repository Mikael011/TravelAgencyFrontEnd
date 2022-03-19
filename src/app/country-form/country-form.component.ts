import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CountryService} from "../service/country.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent implements OnInit {

  constructor(private countryService: CountryService, private router: Router) { }

  countryForm = new FormGroup(
    {
      name: new FormControl('')
    }
  )

  ngOnInit(): void {
  }

  onSubmit() {
    const submitMessage = "Name: " + this.countryForm.get('name')?.value;
    // alert(submitMessage);

    const countryDto = {
      name: this.countryForm.get('name')?.value,
    };

    this.countryService.create(countryDto).subscribe(response => {
      // alert(response);
      this.router.navigate(['countries']);
    })

  }

}
