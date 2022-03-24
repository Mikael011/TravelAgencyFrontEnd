import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserDto} from "../../model/userDto";
import {UserLoginDto} from "../../model/userLoginDto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = '/api/v1/users';
  optionsWithAuthorizationHeader = {};
  userDto: UserDto | undefined
  constructor(private httpClient: HttpClient) {
  }

  getUser(): UserDto | undefined {
    return this.userDto;
  }

  setUser(user: UserDto): void {
    this.userDto = user;
  }

  isAuthenticated(): boolean {
    if (this.userDto != null) {
      return true;
    }
    return false;
  }



  public login(userLoginDto: UserLoginDto): Observable<any> {
    //aici inca mai avem o problema cu authentificarea(trebuie folosit din https://www.base64encode.org/  codul: YXJwaUBnbWFpbC5jb206MTIz)
    this.optionsWithAuthorizationHeader = {headers: {Authorization: 'Basic ' + btoa(userLoginDto.email + ':' + userLoginDto.password)}}


    // return this.httpClient.post(this.userUrl + '/login', userLoginDto) ;
    return this.httpClient.post('/api/v1/users/login', userLoginDto, this.optionsWithAuthorizationHeader) ;
  }
}
