import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TravelDto} from "../../model/travelDto";

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  private travelUrl = '/api/travel';

  private httpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public getAll(): Observable<TravelDto[]>{
    return this.httpClient.get(this.travelUrl) as Observable<TravelDto[]>;
  }

  public create(createDTO: { name: any; startDate: any }): Observable<any>{
    return this.httpClient.post(this.travelUrl, createDTO) as Observable<TravelDto>;
  }

}
