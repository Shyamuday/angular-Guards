import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;

  constructor() { }

  isAuthenticated() {

    if (localStorage.getItem('logIn')) {
      return this.isLoggedIn = true;
    }
    return this.isLoggedIn = false;

  }


}
