import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  // http://localhost:8081/api/v1/room/
  // am facut redirect de la /api/* la https://localhost:8081 in fisierul de proxy.conf.json
  private ticketUrl = "/api/v1/ticket";

  private httpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public getAll(): Observable<Object> {
    return this.httpClient.get(this.ticketUrl + "/findAll")//backend not finished of Mihai
  }
  public create(dto: { name: any }): Observable<Object> {
    return this.httpClient.post(this.ticketUrl + "/create", dto);
  }

}
