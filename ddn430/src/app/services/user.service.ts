import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient) { }

  private userUrl = '/user';

  postUserInfo(userInfo: User): string {
    this.http.post(this.userUrl, userInfo)
    return "success"
  }

}
