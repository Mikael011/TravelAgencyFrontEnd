export class AirportDTO {
  name: string;
  cityId: number;

  constructor(name: string, cityId: number) {
    this.name = name;
    this.cityId = cityId;
  }

}