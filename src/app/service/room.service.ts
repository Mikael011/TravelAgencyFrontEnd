import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RoomDTO} from "../../model/roomDTO";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  // http://localhost:8081/api/v1/room/
  // am facut redirect de la /api/* la https://localhost:8081 in fisierul de proxy.conf.json
  private roomsUrl = "/api/v1/room"

  private httpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  // http://localhost:8081/api/v1/room/findAll
  public getAll(): Observable<Object> {
    return this.httpClient.get(this.roomsUrl + "/findAll");
  }
}
