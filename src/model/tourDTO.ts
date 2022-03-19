export class TourDTO {
 id: number;
 tourId: number;
 startingCity: string;
 startingAirport: string;
 destinationCity: string;
 destinationHotel: string;
 destinationAirport: string;
 departureDate: Date;
 dateOfReturn: Date;
 numberOfDays: number;
 price: number;
 priceChild: number;
 numberOfSeats:number;


  constructor(id: number, tourId: number, startingCity: string, startingAirport: string, destinationCity: string, destinationHotel: string, destinationAirport: string, departureDate: Date, dateOfReturn: Date, numberOfDays: number, price: number, priceChild: number, numberOfSeats: number) {
    this.id = id;
    this.tourId = tourId;
    this.startingCity = startingCity;
    this.startingAirport = startingAirport;
    this.destinationCity = destinationCity;
    this.destinationHotel = destinationHotel;
    this.destinationAirport = destinationAirport;
    this.departureDate = departureDate;
    this.dateOfReturn = dateOfReturn;
    this.numberOfDays = numberOfDays;
    this.price = price;
    this.priceChild = priceChild;
    this.numberOfSeats = numberOfSeats;
  }
}
