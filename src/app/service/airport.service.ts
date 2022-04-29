import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AirportCreateDTO} from "../../model/airportCreateDTO";

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  // http://localhost:8081/api/v1/room/
  // am facut redirect de la /api/* la https://localhost:8081 in fisierul de proxy.conf.json
  private airportsUrl = "/api/v1/airport"

  private httpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  // http://localhost:8081/api/v1/airport/findAll
  public getAll(): Observable<Object> {
    return this.httpClient.get(this.airportsUrl + "/findAll")
  }

  public create(airportCreateDTO : AirportCreateDTO): Observable<Object> {
    return this.httpClient.post(this.airportsUrl + "/create", airportCreateDTO);
  }
  public getAirportsByCountry( countryId : number ): Observable<Object> {
    return this.httpClient.post(this.airportsUrl + "/getAirportsByCountry", countryId);
  }
}
