import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { TokenService } from './token.service';
import { Token } from '../models/token.model';
import {StringUtils} from "../../utils/string-utils";
import {HttpEvent, HttpResponse, HttpInterceptor, HttpRequest, HttpHandler} from "@angular/common/http";


@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  constructor(private router: Router,
              private tokenService: TokenService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: Token | null = this.tokenService.getValidToken();
    if (!token) {
      return next.handle(req).do(this.handleResponse);
    }

    if (req.headers.has('Authorization')) {
      return next.handle(req).do(this.handleResponse);
    }

    // Clone the request to add the Authorization header.
    const update = { headers: req.headers.set('Authorization', 'Bearer ' + token.accessToken) };
    const authReq = req.clone(update);
    // Pass on the cloned request instead of the original request.
    return next.handle(authReq).do(this.handleResponse);
  }

  handleResponse(event: HttpEvent<any>) {
    if (event instanceof HttpResponse) {
      if (event.status === 401 && !StringUtils.endsWith(event.url, '/login')) {
        this.router.navigate(['/login']);
      }
    }
  }
}
