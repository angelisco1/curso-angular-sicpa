import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // const token = localStorage.getItem('jwt');
    if (request.method === 'POST' && request.url.includes('login')) {
      return next.handle(request);
    }

    const newRequest = request.clone({
      headers: request.headers.append('Authorization', '12345'),
    })

    return next.handle(newRequest)
      .pipe(
        map((resp) => {
          console.log(resp);
          return resp;
        })
      );
  }
}
