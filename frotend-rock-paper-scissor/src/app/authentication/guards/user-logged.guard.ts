import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';

import { map, Observable } from 'rxjs';
import { UserLogin } from '../models/user-login';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedGuard implements CanActivate, CanLoad {

  constructor(
    private authenticationService: AuthenticationService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authenticationService.userLogged$
      .pipe(
        map(userLogged => {
          return this.authenticationService.checkIfUserIsLogged(userLogged);
        })
      );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authenticationService.userLogged$
      .pipe(
        map((userLogged: UserLogin) => {
          return this.authenticationService.checkIfUserIsLogged(userLogged);
        })
      );
  }
}
