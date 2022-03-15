import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private citiesUrl = "/api/v1/city"

  private httpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  // http://localhost:8081/api/v1/city/findAll
  public getAll(): Observable<Object> {
    return this.httpClient.get(this.citiesUrl + "/findAll")
  }
}
