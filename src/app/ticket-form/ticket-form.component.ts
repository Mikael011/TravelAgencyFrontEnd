import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {TicketService} from "../service/ticket.service";
import {FormControl, FormGroup} from "@angular/forms";
import {TicketDTO} from "../../model/ticketDTO";

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {

  constructor(private ticketService: TicketService, private router:Router) { }


  ticketForm = new FormGroup({
    name: new FormControl('')
  })

  ngOnInit(): void {
  }

  onSubmit() {
    const submitMessage = "Name: " + this.ticketForm.get('name')?.value;
    // alert(submitMessage);

    const ticketDTO= {
      name: this.ticketForm.get('name')?.value,
    };

    this.ticketService.create(ticketDTO).subscribe(response => {
      // alert(response);
      this.router.navigate(['tickets']);
    })
  }
}
