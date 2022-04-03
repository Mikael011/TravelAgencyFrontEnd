import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../service/airport.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-airport-form',
  templateUrl: './airport-form.component.html',
  styleUrls: ['./airport-form.component.css']
})
export class AirportFormComponent implements OnInit {

  constructor(private airportService: ReservationService, private router:Router) { }

  airportForm = new FormGroup({
    name: new FormControl('')
  })

  ngOnInit(): void {
  }

  onSubmit() {
    const submitMessage = "Name: " + this.airportForm.get('name')?.value;
    // alert(submitMessage);

    const airportDto= {
      name: this.airportForm.get('name')?.value,
    };

    this.airportService.create(airportDto).subscribe(response => {
      // alert(response);
      this.router.navigate(['airports']);
    })

  }

}
