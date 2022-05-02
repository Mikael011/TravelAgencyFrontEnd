import {CityDTO} from "./cityDTO";

export class AirportDTO {
  id : number = 0;
  name: string="";
  cityId: number=0;
  city: CityDTO = new CityDTO();


}
