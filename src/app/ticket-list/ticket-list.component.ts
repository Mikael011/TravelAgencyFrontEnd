import { Component, OnInit } from '@angular/core';
import {TicketDTO} from "../../model/ticketDTO";
import {TicketService} from "../service/ticket.service";

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  tickets: TicketDTO[] = [];

  constructor(private ticketService: TicketService) {
    this.ticketService = ticketService;
  }

  ngOnInit(): void {
    this.ticketService.getAll().subscribe(successfulResponse => {
      console.log("Successful response received " + successfulResponse);
      this.tickets = (successfulResponse as TicketDTO[]);
    })
  }
}
