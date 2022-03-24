import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {ReservationService} from "../service/reservation.service";
import {ReservationDTO} from "../../model/reservationDTO";

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  constructor(private reservationService: ReservationService, private router:Router) { }

  reservationForm = new FormGroup({
    name: new FormControl('')
  })

  ngOnInit(): void {
  }

  onSubmit() {
    const submitMessage = "Name: " + this.reservationForm.get('name')?.value;
    // alert(submitMessage);

    const reservationDTO= {
      name: this.reservationForm.get('name')?.value,
    };

    this.reservationService.create(reservationDTO).subscribe(response => {
      // alert(response);
      this.router.navigate(['reservations']);

})
  }}
