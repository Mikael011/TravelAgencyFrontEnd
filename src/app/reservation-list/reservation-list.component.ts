import { Component, OnInit } from '@angular/core';
import {ReservationDTO} from "../../model/reservationDTO";
import {ReservationService} from "../service/reservation.service";

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations: ReservationDTO[] = [];

  constructor(private reservationService: ReservationService) {
    this.reservationService = reservationService;
  }

  ngOnInit(): void {
    this.reservationService.getAll().subscribe(succesfulResponse => {
      console.log("Successful response received " + succesfulResponse)
      this.reservations = (succesfulResponse as ReservationDTO[])
    });
  }
}
