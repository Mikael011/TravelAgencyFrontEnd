export class TicketDTO {
  id: number;
  tourId: number;
  participants: number;
  price: number;

  constructor(id: number, tourId: number, participants: number, price: number) {
    this.id = id;
    this.tourId = tourId;
    this.participants = participants;
    this.price = price;
  }
}
