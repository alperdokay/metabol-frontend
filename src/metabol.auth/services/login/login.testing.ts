import {HttpHeaders} from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable()
export class LoginTestingService {
  options: any;
  constructor() {

  }

  login(loginForm, callback: (data) => void) {
    throw new SyntaxError("Not implemented");
  }

  logout() {
    throw new SyntaxError("Not implemented");
  }

  changePassword(signupForm, callback: () => void) {
    throw new SyntaxError("Not implemented");
  }

  userInfo(callback: (data) => void) {
    throw new SyntaxError("Not implemented");
  }

  submitUserInfo(value, callback: (data) => void) {
    throw new SyntaxError("Not implemented");
  }

  isLoggedIn() {
    throw new SyntaxError("Not implemented");
  }

  token() {
    throw new SyntaxError("Not implemented");
  }

  optionByAuthorization() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return new this.options({ headers: headers });
  }
}
