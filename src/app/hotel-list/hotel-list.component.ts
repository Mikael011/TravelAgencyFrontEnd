import { Component, OnInit } from '@angular/core';
import {HotelService} from "../service/hotel.service";
import {HotelDTO} from "../../model/hotelDTO";

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  hotels: HotelDTO[] = [];

  constructor(private hotelService: HotelService) {
    this.hotelService = hotelService;
  }

  ngOnInit(): void {
    this.hotelService.getAll().subscribe(succesfulResponse => {
      console.log("Successful response received " + succesfulResponse);
      // @ts-ignore
      this.hotels = (succesfulResponse as HotelDTO);
    });
  }

}
