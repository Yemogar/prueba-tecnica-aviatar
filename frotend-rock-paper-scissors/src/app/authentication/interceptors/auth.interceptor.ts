import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string | null = this.authService.getToken();

    if (token) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      });
    }

    return next.handle(request)
      .pipe(
        tap(
          (response: HttpEvent<any>) => {
            if (response instanceof HttpResponse && response.headers.has('Authorization')) {
              const token = response.headers.get('Authorization')?.split('Bearer ')[1];
              this.authService.setToken(token);
          }
          }
        ),
        catchError(
          (error : HttpErrorResponse) => {
            if (error.status === 401) {
              this.authService.logout();
            }
            return throwError(error);
          }
        )
      )
  }
}

