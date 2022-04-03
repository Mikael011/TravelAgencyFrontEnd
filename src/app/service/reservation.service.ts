import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservationsUrl = "/api/v1/reservation"

  private httpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public getAll(): Observable<Object> {
    return this.httpClient.get(this.reservationsUrl + "/findAll")
  }
  public create(dto: { name: any }): Observable<Object> {
    return this.httpClient.post(this.reservationsUrl + "/create", dto);
  }

}
