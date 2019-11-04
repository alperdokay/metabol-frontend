import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SignupService} from '../../services/signup/signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css'],
  providers: [SignupService],
})
export class SignupComponent {

  form: FormGroup;

  constructor(private signupService: SignupService, private fb: FormBuilder,
     private router: Router) {

    this.form = fb.group({
      "name": ["", Validators.required],
      "surname": ["", Validators.required],
      "email": ["", Validators.required],
      "affiliation": ["", Validators.required],
      "confirmPassword": ["", Validators.required],
      "password": ["", Validators.compose([Validators.required, Validators.minLength(6)])],
    },
      { validator: this.matchingPasswords('password', 'confirmPassword') });
  }

  /**
   * To chech whether confirmPasswor is same with Password or not
   * @param  {string} passwordKey        [description]
   * @param  {string} confirmPasswordKey [description]
   * @return {[type]}                    [description]
   */
  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): { [key: string]: any } => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];
      if (!confirmPassword)
        return { mismatchedPasswords: false };
      else if (password.value !== confirmPassword.value)
        return { mismatchedPasswords: true };
    }
  }

  onSubmit(value) {
    this.signupService.signup(value, () => {
      this.router.navigate(['/panel']);
    });
  }
}
