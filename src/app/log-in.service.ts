import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './interface/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  url = 'http://localhost:3000/'
  constructor(private _http: HttpClient) { }


  postLogin(data: Login): Observable<Login> {
    return this._http.post<Login>(`${this.url}/user`, data)
  }

  getUserLogIn() {

  }

  getAdminLogIn() {

  }
}
