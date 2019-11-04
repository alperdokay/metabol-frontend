import { Injectable, Inject } from '@angular/core';
import {Router} from '@angular/router';
import {AppSettings} from '../../../app/';
import {NotificationsService} from 'angular2-notifications';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http:HttpClient, private router: Router, private notify: NotificationsService) { }

  login(loginForm, callback: (data) => void) {
    let tokenData = {
      username: loginForm.Email,
      password: loginForm.Password
    };
    // this.http.post(`${AppSettings.API_ENDPOINT}/auth`, tokenData)
    this.http.post(`http://127.0.0.1:5000/auth`, tokenData)
      .subscribe((data: any) => {
        callback(data);
        this.notify.success('Login Successful', 'Welcome');
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('userName', data.userName);
      },
      error => {
        if (error.status == 400)
          this.notify.error('Login Fail', error.json().error_description);
        else if (error.status == 401)
          this.notify.error('Login Fail', 'email or password');
      });
  }

  logout() {
    localStorage.removeItem('access_token');
    this.notify.info('Logged out', 'Goodbye');
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 10);
  }

  changePassword(signupForm, callback: () => void) {
    let url = `${AppSettings.API_ENDPOINT}/auth/change-password`;
    let data = {
      old_password: signupForm.oldPassword,
      new_password: signupForm.newPassword
    };
    this.http.post(url, data, this.optionByAuthorization())
      .subscribe(
      () => {
        this.notify.success('Password Changed Successfully', '');
        callback();
      },
      error => {
        if (error.status == 400) {
          let errorContent = error.json();
          for (let em in errorContent)
            for (let e of errorContent[em])
              this.notify.error(em, e);
        }
        else if (error.status == 401)
          this.notify.error('Authentication Failed', 'Wrong Passoword');
      });
  }

  userInfo(callback: (data) => void) {
    let url = `${AppSettings.API_ENDPOINT}/auth/info`;
    this.http.get(url, this.optionByAuthorization())
      .subscribe((data: any) => {
        callback(data)
      });
  }

  submitUserInfo(value, callback: (data) => void) {
    let url = `${AppSettings.API_ENDPOINT}/auth/update`;
    this.http.post(url, value, this.optionByAuthorization())
      .subscribe(
      (data) => {
        this.notify.success('My Profile Changed Successfully', '')
        callback(data);
      },
      error => {
        if (error.status == 400)
          this.notify.error('An Error Occured', error.json().description);
      });
  }

  isLoggedIn() {
    return localStorage.getItem('access_token') !== null;
  }

  token() {
    return `JWT ${localStorage.getItem('access_token')}`;
  }

  optionByAuthorization() {
    let _headers;
    if (this.isLoggedIn())
      _headers = new HttpHeaders().append('Authorization', this.token());
    return  {headers: _headers};
  }

}
