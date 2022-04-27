import { authService } from './../../services/auth.service';
import { loginInterface } from './../../models/login.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginPage implements OnInit {
loginObj: loginInterface = {
  email: '',
  password: ''
}
  constructor(private authSrv: authService) { }

  ngOnInit(): void {
  }

  onSubmit() {
this.authSrv.doLogin(this.loginObj);
  }

}
