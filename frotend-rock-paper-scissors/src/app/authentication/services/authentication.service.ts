import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from 'src/environments/environment.development';
import { UserLogin } from '../models/user-login';
import { UserSignup } from '../models/user-signup';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userLogged: UserLogin = {username: '', password: ''};
  private userLoggedSubject:  BehaviorSubject<UserLogin> = new BehaviorSubject(this.userLogged);
  public userLogged$: Observable<UserLogin> = this.userLoggedSubject.asObservable();

  private apiUrl: string = environment.apiUrl + '/auth';

  constructor(private httpClient: HttpClient, private router: Router) { }

  public login(userLogin: UserLogin): Observable<unknown> {
    return this.httpClient.post(this.apiUrl + '/login', userLogin, {observe: 'response'});
  }

  public register(userSignup: UserSignup): Observable<unknown> {
    return this.httpClient.post(this.apiUrl + '/register', userSignup);
  }

  public logout(): void {
    this.userLoggedSubject.next(this.userLogged);

    this.clearToken();

    this.router.navigateByUrl('/login');
  }

  public setUserLogged(user: UserLogin): void {
    this.userLoggedSubject.next(user);
  }

  public setToken(token: string | undefined): void {
    if (token) {
      localStorage.setItem('token', token)
    }
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public clearToken(): void {
    localStorage.removeItem('token');
  }

  public checkIfUserIsLogged(userLogged: UserLogin): boolean | UrlTree {
    const isTheUserLogged: boolean = userLogged.username !== '' && userLogged.password !== '';
    if (isTheUserLogged) {
      return isTheUserLogged;
    } else {
      return this.router.parseUrl('/login');
    }
  }
}
