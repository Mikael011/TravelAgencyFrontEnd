import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {Router} from "@angular/router";
import {RoomService} from "../service/room.service";

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css']
})
export class RoomFormComponent implements OnInit {

  constructor(private roomService: RoomService, private router:Router) { }

  roomForm = new FormGroup({
    name: new FormControl('')
  })

  ngOnInit(): void {
  }

  onSubmit() {
    const submitMessage = "Name: " + this.roomForm.get('name')?.value;
    // alert(submitMessage);

    const roomDto= {
      name: this.roomForm.get('name')?.value,
    };

this.roomService.create(roomDto).subscribe(response => {
  alert(response);
  this.router.navigate(['airports']);
})

}

}
