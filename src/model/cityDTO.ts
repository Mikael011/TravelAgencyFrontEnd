export class CityDTO {

  name: string;
  countryId: number; //todo: Arpi - cred ca field-ul acesta trebuie sters, consider asta pentru ca in backend la createDto nu o avem.

  constructor( name: string, countryId: number) {
    this.name = name;
    this.countryId = countryId;
    ;
  }
}
