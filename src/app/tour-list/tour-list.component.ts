import { Component, OnInit } from '@angular/core';
import {TourDTO} from "../../model/tourDTO";
import {TourService} from "../service/tour.service";

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {

  tours: TourDTO[] = [];

  constructor(private tourSevice: TourService) {
    this.tourSevice = tourSevice;

  }

  ngOnInit(): void {
      this.tourSevice.getAll().subscribe(successfulResponse => {
        console.log("Successful response received " + successfulResponse);
        this.tours = (successfulResponse as TourDTO[]);
      });
  }

}

