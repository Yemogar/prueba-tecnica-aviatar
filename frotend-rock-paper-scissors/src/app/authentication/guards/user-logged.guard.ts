import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';

import { map, Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedGuard implements CanActivate, CanLoad {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authenticationService.userLogged$
      .pipe(
        map(userLogged => {
          const isTheUserLogged: boolean = userLogged.username !== '' && userLogged.password !== '';
          if (isTheUserLogged) {
            return isTheUserLogged;
          } else {
            return this.router.parseUrl('/login');
          }
        })
      );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authenticationService.userLogged$
      .pipe(
        map(userLogged => {
          const isTheUserLogged: boolean = userLogged.username !== '' && userLogged.password !== '';
          if (isTheUserLogged) {
            return isTheUserLogged;
          } else {
            return this.router.parseUrl('/login');
          }
        })
      );
  }
}
