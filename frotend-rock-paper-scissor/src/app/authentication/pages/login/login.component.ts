import { HttpResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { UserLogin } from '../../models/user-login';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnDestroy{
  public userLogin: UserLogin;

  private loginSubscription: Subscription | undefined;

  constructor(private router: Router, private authService: AuthenticationService, private snackBar: MatSnackBar) {
    this.userLogin = {
      username: '',
      password: ''
    }
  }

  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe();
  }

  public login(): void {
    this.loginSubscription = this.authService.login(this.userLogin)
      .subscribe(
        (response: any) => {
          this.authService.setUserLogged(this.userLogin);
          this.router.navigate(['/menu']);
        },
        (error) => {
          this.openSnackBar('The username or password entered is incorrect!')
        }
      );
  }

  public navigateToRegister(): void {
    this.router.navigate(['/register']);
  }

  public openSnackBar(message: string): void {
    this.snackBar.open(
      message,
      '', 
      {
        duration: 3000,
        panelClass: ['simple-snack-bar']
      }
    )
  }
}
