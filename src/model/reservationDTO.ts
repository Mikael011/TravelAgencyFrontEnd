export class ReservationDTO {
  roomId: string;
  userId: number;
  startDate: Date;
  endDate: Date;

  constructor(roomId: string, userId: number, startDate: Date, endDate: Date) {
    this.roomId = roomId;
    this.userId = userId;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
