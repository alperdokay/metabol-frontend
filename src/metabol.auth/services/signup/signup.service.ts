import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppSettings} from '../../../app/';
import {NotificationsService} from 'angular2-notifications'


@Injectable()
export class SignupService {
  headers: HttpHeaders;
  options: any;

  constructor(private http: HttpClient, private notify: NotificationsService) {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
  }

  signup(signupForm, callback: () => void) {
    let url = `${AppSettings.API_ENDPOINT}/auth/sign-up`;
    this.http.post(url, signupForm, { headers: this.headers })
      .subscribe(
      () => {
        this.notify.success('Sign Up Successful','Welcome');
        callback();
      },
      error => {
        if (error.status == 400) {
          let errorContent = error.json();
          console.log(errorContent);
          for (let em in errorContent)
            for (let e of errorContent[em])
              this.notify.error(em.toUpperCase(), e);
        }
      });
  }

}
