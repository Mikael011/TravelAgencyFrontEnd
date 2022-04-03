import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CityDTO} from "../../model/cityDTO";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private citiesUrl = "/api/v1/city"

  private httpClient;

  constructor(httpClient: HttpClient, private userService: UserService) {
    this.httpClient = httpClient;
  }

  // http://localhost:8081/api/v1/city/findAll
  public getAll(): Observable<Object> {

    return this.httpClient.get(this.citiesUrl + "/findAll", {
      headers: {
        Authorization: 'Basic ' + btoa('arpi@gmail.com:123')
      }
    });
    // return this.httpClient.get(this.citiesUrl + "/findAll",);
  }

  create(createDto: { name: any }): Observable<CityDTO> {
    return this.httpClient.post(this.citiesUrl + "/create", createDto) as Observable<CityDTO>

  }
}
