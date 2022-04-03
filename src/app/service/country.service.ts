import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CountryDTO} from "../../model/countryDTO";
import {CountryCreateDTO} from "../../model/countryCreateDTO";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  // http://localhost:8081/api/v1/room/
  // am facut redirect de la /api/* la https://localhost:8081 in fisierul de proxy.conf.json
  private countriesUrl = "/api/v1/country"

  private httpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  // http://localhost:8081/api/v1/airport/findAll
  public getAll(): Observable<Object> {
    return this.httpClient.get(this.countriesUrl + "/findAll")
  }

  public create(dto: { name: any }): Observable<Object> {
    return this.httpClient.post(this.countriesUrl + '/create', dto);
  }
}


