import {CountryDTO} from "./countryDTO";

export class CityDTO {
  id : number =0;
  name: string ="";
  country : CountryDTO = new CountryDTO();

}
