import { Router } from '@angular/router';
import { Component } from '@angular/core';
import {
  collapseOnLeaveAnimation,
  expandOnEnterAnimation,
} from 'angular-animations';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [expandOnEnterAnimation(), collapseOnLeaveAnimation()],
})
export class AppComponent {
  title = 'frontend-challenge-Iago-Jacintho';
  isHeaderAvailable = false;
  constructor(private routeAdress: Router) {
    moment.locale('pt-br');
    this.routeAdress.events.subscribe((ev) => {
      if (this.routeAdress.url.indexOf('login') !== -1) {
        this.isHeaderAvailable = false;
      } else {
        this.isHeaderAvailable = true;
      }
    });
  }
}
