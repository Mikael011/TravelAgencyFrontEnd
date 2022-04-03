import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TravelService} from "../service/travel.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-travel-form',
  templateUrl: './travel-form.component.html',
  styleUrls: ['./travel-form.component.css']
})
export class TravelFormComponent implements OnInit {

  travelForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    date: new FormControl('')
  })

  constructor(private travelService: TravelService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const submitMessage = "Name: " + this.travelForm.get('name')?.value;
    const dateMessage = "Date: " + this.travelForm.get('date')?.value;
    alert(submitMessage + " " +dateMessage);

    const travelDto = {
      name: this.travelForm.get('name')?.value,
      startDate: this.travelForm.get('date')?.value
    };

    this.travelService.create(travelDto).subscribe(response => {
      alert(response);
      this.router.navigate(['/travel']);
    })

  }

}
