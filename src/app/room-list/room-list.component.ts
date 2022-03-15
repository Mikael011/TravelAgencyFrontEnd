import { Component, OnInit } from '@angular/core';
import {RoomDTO} from "../../model/roomDTO";
import {RoomService} from "../service/room.service";

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  rooms: RoomDTO[] = [];

  constructor(private roomsService: RoomService) {
    this.roomsService = roomsService;
  }

  ngOnInit(): void {
    this.roomsService.getAll().subscribe(successfulResponse => {
      console.log("Successful response received " + successfulResponse);
      this.rooms = (successfulResponse as RoomDTO[]);
    })
  }
}
