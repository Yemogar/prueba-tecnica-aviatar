import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, of, Subscription, tap, throwError } from 'rxjs';
import { UserSignup } from '../../models/user-signup';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnDestroy{
  private registerSubscription: Subscription | undefined;

  signupForm = new FormGroup({
    firstName : new FormControl('', Validators.required),
    lastName : new FormControl('', Validators.required),
    username : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  });

  constructor(private router: Router, private authService: AuthenticationService, private snackBar: MatSnackBar) {}

  ngOnDestroy(): void {
    this.registerSubscription?.unsubscribe();
  }

  public signup(): void {
    this.registerSubscription = this.authService.register(this.signupForm.getRawValue() as UserSignup)
      .subscribe(
        () => {
          this.openSnackBar('The user has been created successfully!');
          this.router.navigateByUrl('/login');
        },
        (error) => {
          this.openSnackBar('The user already exist!');
        } 
      )
  }

  public navigateToLogin(): void {
    this.router.navigate(['/login']);
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
