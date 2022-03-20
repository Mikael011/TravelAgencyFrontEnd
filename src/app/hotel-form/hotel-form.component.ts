import { Component, OnInit } from '@angular/core';
import {HotelService} from "../service/hotel.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.css']
})
export class HotelFormComponent implements OnInit {

  constructor(private hotelService: HotelService, private router: Router) { }

  hotelForm = new FormGroup(
    {
      name: new FormControl('')
    }
  )

  ngOnInit(): void {
  }

  onSubmit() {
    const submitMessage = "Name: " + this.hotelForm.get('name')?.value;
    alert(submitMessage);

    const hotelDto = {
      name: this.hotelForm.get('name')?.value,
    };

    this.hotelService.create(hotelDto).subscribe(response => {
      alert(response);
      this.router.navigate(['hotel']);
    })
  }

}
