import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {
  signupForm = new FormGroup({
    firstName : new FormControl('', Validators.required),
    lastName : new FormControl('', Validators.required),
    username : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  });

  constructor(private router: Router) {}

  public signup(): void {
  }

  public navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}
