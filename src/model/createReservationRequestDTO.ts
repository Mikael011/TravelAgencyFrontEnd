export class CreateReservationRequestDTO{

  startAirportId : number = 0;
  destAirportId : number = 0;
  startDate : string="";
  endDate : string = "";
  clientName : string ="";
  clientEmail : string = "";
  phoneNumber : string = "";
 submitted : boolean = false;
}
