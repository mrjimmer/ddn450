import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserInformation } from '../models/user'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient) { }

  private userUrl = '/api/user';

  postUserInfo(userInfo: UserInformation) : Observable<UserInformation>{

    return this.http.post<UserInformation>(this.userUrl, userInfo);
    
  }

}
