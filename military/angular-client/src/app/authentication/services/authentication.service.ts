import { Observable } from 'rxjs/Rx';
import { UserCredentialsDTO } from '../models/user-credentials-dto.model';
import { TokenService } from './token.service';
import { Token } from '../models/token.model';
import { User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { AccountService } from './account.service';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import {ApiService} from "../../app.service";
import {HttpHeaders} from "@angular/common/http";
import {StringUtils} from "../../utils/string-utils";
import {AppAuthenticationConstants} from "../authentication.constants";

@Injectable()
export class AuthenticationService {
  private loggedUser: User | null;

  constructor(private api: ApiService,
              private tokenService: TokenService,
              private account: AccountService
              // private notifierService: NotifierService
  ) {
  }

  getLocalVersion(): Observable<any> {
    return this.api.get('/assets/config.json');
  }

  getVersion(): Observable<any> {
    return this.api.get('/api/public/version');
  }

  login(userCredentials: any): Observable<User> {
    return this.doLogin(userCredentials);
  }

  doLogin(userCredentials: UserCredentialsDTO): Observable<any> {
    const headers: HttpHeaders = this.getOauthHeaders();
    console.log('headers', headers);
    console.log('Content-Type', headers.get('Content-Type'));

    const data = StringUtils.format('{0}{1}{2}{3}{4}{5}',
      `username=${encodeURIComponent(userCredentials.username)}`,
      `&password=${encodeURIComponent(userCredentials.password)}`,
      `&grant_type=${AppAuthenticationConstants.GRANT_TYPE}`,
      `&scope=${AppAuthenticationConstants.SCOPE}`,
      `&client_id=${AppAuthenticationConstants.CLIENT_ID}`,
      `&client_secret=${AppAuthenticationConstants.CLIENT_SECRET}`
    );

    return this.api.post(AppAuthenticationConstants.LOGIN_URL, data, { headers: headers })
      .map(res => this.authSuccess(res))
      .catch(err => Observable.throw(err));
  }

  logout(): any {
    return this.api.post(AppAuthenticationConstants.LOGOUT_URL, '')
      .subscribe(res => this.doClientLogout());
  }

  refreshToken(): Observable<any> {
    const refreshToken: string = this.tokenService.getRefreshToken();
    if (refreshToken) {
      const headers = this.getOauthHeaders();
      const data = StringUtils.format('{0}{1}{2}{3}{4}',
        'grant_type=refresh_token',
        `&refresh_token=${refreshToken}`,
        `&scope=${AppAuthenticationConstants.SCOPE}`,
        `&client_id=${AppAuthenticationConstants.CLIENT_ID}`,
        `&client_secret=${AppAuthenticationConstants.CLIENT_SECRET}`
      );

      return this.api.post(AppAuthenticationConstants.LOGIN_URL, data, { headers: headers })
        .map(res => this.authSuccess(res))
        .catch(err => this.doClientLogout());
    }

    return Observable.throw('Token not refreshed');
  }

  getOauthHeaders(): HttpHeaders {
    const sequence = `${AppAuthenticationConstants.CLIENT_ID}:${AppAuthenticationConstants.CLIENT_SECRET}`;
    const base64Sequence = btoa(sequence);

    return new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      'Authorization': 'Basic ' + base64Sequence
    });
  }

  authSuccess(response: any): Token {
    const token = new Token(response);
    this.tokenService.setToken(token);
    return token;
  }

  doClientLogout(): any {
    this.tokenService.invalidateToken();
    this.loggedUser = null;
    // this.notifierService.userChangeNotification().next(this.loggedUser);
  }

  getUser(forceReload: boolean = false): Observable<User> {
    if (this.loggedUser && !forceReload) {
      return Observable.of(this.loggedUser);
    }

    return this.account.get()
      .map(user => {
        // this.loggedUser = new User(user.id, user.entityId, user.email, user.name,
        //   user.authorities, user.personal, user.title, user.type, user.clinicId);

        // notify all concerned parties that the user data has changed
        // this.notifierService.userChangeNotification().next(this.loggedUser);

        return this.loggedUser;
      })
      .catch(this.handleError);
  }

  hasUser(): Observable<boolean> {
    return this.getUser()
      .map(user => !!user)
      .catch(error => Observable.of(false));
  }

  loggedUserHasAuthority(authority: string): Observable<boolean> {
    return this.getUser()
      .map(user => {
        if (user) {
          return user.hasAuthority(authority);
        } else {
          return false;
        }
      })
      .catch(err =>
        Observable.of(false));
  }

  private handleError(error: any): ErrorObservable {
    try {
      return Observable.throw(error);
    } catch (ex) {
      return Observable.throw(error);
    }
  }
}
