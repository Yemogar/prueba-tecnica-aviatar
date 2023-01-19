import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';

import { UserLogin } from '../models/user-login';
import { UserSignup } from '../models/user-signup';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userLogged: UserLogin = {username: 'd', password: 'd'};
  private userLoggedSubject:  BehaviorSubject<UserLogin> = new BehaviorSubject(this.userLogged);

  public userLogged$: Observable<UserLogin> = this.userLoggedSubject.asObservable();

  constructor(private httpClient: HttpClient, private router: Router) { }

  private login(userLogin: UserLogin): Observable<unknown> {
    return this.httpClient.post('', userLogin);
  }

  private register(userSignup: UserSignup): Observable<unknown> {
    return this.httpClient.post('', userSignup);
  }

  public logout(): void {
    this.userLoggedSubject.next(this.userLogged);

    this.router.navigateByUrl('/login');
  }
}
