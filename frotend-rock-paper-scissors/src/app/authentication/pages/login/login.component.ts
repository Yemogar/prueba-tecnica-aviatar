import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserLogin } from '../../models/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  public userLogin: UserLogin;

  constructor(private router: Router) {
    this.userLogin = {
      username: '',
      password: ''
    }
  }

  public login(): void {
    alert(JSON.stringify(this.userLogin));
  }

  public navigateToRegister(): void {
    this.router.navigate(['/register']);
  }

}
