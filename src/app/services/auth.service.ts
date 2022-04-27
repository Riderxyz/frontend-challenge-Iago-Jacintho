import { Router } from '@angular/router';
import { loginInterface } from './../models/login.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class authService {
  constructor(private route: Router) {}

  doLogin(loginObj: loginInterface) {
    localStorage.setItem('loginOBJ', JSON.stringify(loginObj));
    this.route.navigateByUrl('home');
  }

  signOut() {
    localStorage.removeItem('loginOBJ');
    this.route.navigateByUrl('login');
  }
}
