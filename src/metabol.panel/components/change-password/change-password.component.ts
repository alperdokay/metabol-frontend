import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from "../../../metabol.auth/services/";

@Component({
  selector: 'app-change-password',
  templateUrl: 'change-password.component.html',
  styleUrls: ['change-password.component.css'],
})
export class ChangePasswordComponent {

  form: FormGroup;
  constructor(public loginService: LoginService, fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      "oldPassword": ["", Validators.compose([Validators.required, Validators.minLength(6)])],
      "newPassword": ["", Validators.required],
      "confirmPassword": ["", Validators.compose([Validators.required, Validators.minLength(6)])],

    },
      { validator: this.matchingPasswords('newPassword', 'confirmPassword') });
  }

  //To chech whether confirmPasswor is same with Password or not
  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): { [key: string]: any } => {
      let newPassword = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];
      if (!confirmPassword)
        return { mismatchedPasswords: false };
      else if (newPassword.value !== confirmPassword.value)
        return { mismatchedPasswords: true };
    }
  }

  onSubmit(value) {
    this.loginService.changePassword(value, () => {
      this.router.navigate(['/panel']);
    });

  }
}
