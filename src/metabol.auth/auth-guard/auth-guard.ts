import { CanActivate, Router }    from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate() {
    let isActive = localStorage.getItem('access_token') !== null;
    if (!isActive) this.router.navigate(['/login']);
    return isActive;
  }

}
