export class RoomDTO{
  number: number;
  capacity: number;
  description: string;

  constructor(number: number, capacity: number, description: string) {
    this.number = number;
    this.capacity = capacity;
    this.description = description;
  }
}
