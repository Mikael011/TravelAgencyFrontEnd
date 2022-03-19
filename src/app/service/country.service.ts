import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CountryDTO} from "../../model/countryDTO";
import {CountryCreateDTO} from "../../model/countryCreateDTO";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countriesUrl = "/api/v1/country"

  private httpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public getAll(): Observable<Object> {
    return this.httpClient.get(this.countriesUrl + "/findAll")
  }

  public create(dto: { name: any }): Observable<Object> {
    return this.httpClient.post(this.countriesUrl + '/create', dto);
  }
}


