export class CountryDTO {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.name = name;
    this.id = id;
  }
}
