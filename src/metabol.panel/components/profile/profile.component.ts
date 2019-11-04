import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from "../../../metabol.auth/services";


@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css'],
})
export class ProfileComponent {
  name: string;
  surname: string;
  email: string;
  affiliation: string;
  form: FormGroup;

  constructor(private fb: FormBuilder, public loginService: LoginService, private router: Router) {
    this.form = fb.group({
      "name": [this.name, Validators.required],
      "surname": [this.surname, Validators.required],
      "email": [this.email, Validators.required],
      "affiliation": [this.affiliation, Validators.required],
    });
    this.formValues();
  }

  formValues(): void {
    this.loginService.userInfo((data) => {
      this.form = this.fb.group({
        "name": [data.name, Validators.required],
        "surname": [data.surname, Validators.required],
        "email": [data.email, Validators.required],
        "affiliation": [data.affiliation, Validators.required],
      });
    });
  }

  onSubmit(value) {
    this.loginService.submitUserInfo(value, () => this.router.navigate(['/panel/profile']));
  }

}
