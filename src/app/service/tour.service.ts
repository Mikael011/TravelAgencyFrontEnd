import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private toursUrl = "/api/v1/tour"

  private httpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  public getAll(): Observable<Object> {
    return this.httpClient.get(this.toursUrl + "/findAll");
  }
}
