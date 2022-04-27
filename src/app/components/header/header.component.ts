import { Router } from '@angular/router';
import { loginInterface } from './../../models/login.model';
import { Component, OnInit } from '@angular/core';
import { zoomInOnEnterAnimation, zoomOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[zoomInOnEnterAnimation(), zoomOutOnLeaveAnimation()]
})
export class HeaderComponent implements OnInit {
  loginObj: loginInterface = {
    email: '',
    password: '',
  };

  goBackBtnAvailable = false;
  constructor(private routeAdress: Router) {}

  ngOnInit(): void {
    this.routeAdress.events.subscribe((ev) => {
      if (this.routeAdress.url.indexOf('home') !== -1) {
        this.goBackBtnAvailable = false;
      } else {
        this.goBackBtnAvailable = true;
      }
    });

    this.loginObj = JSON.parse(localStorage.getItem('loginOBJ') as any);
  }
}
