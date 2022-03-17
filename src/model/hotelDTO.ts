export class HotelDTO {
  name: string;
  numberOfStars: number;
  description: string;
  cityId: number;

  constructor(name: string, numberOfStars: number, descriptions: string, cityId: number) {
    this.name = name;
    this.numberOfStars = numberOfStars;
    this.description = descriptions;
    this.cityId = cityId;
  }

}
