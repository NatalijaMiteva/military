import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {HttpClient, HttpResponse} from "@angular/common/http";

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {
  }

  // get(): Observable<any> {
  //   return this.http.get('/api/user', { withCredentials: true })
  //     .catch(err => Observable.throw(err));
  // }
  //
  // save(account: any): Observable<HttpResponse<any>> {
  //   return this.http.post('api/account', account);
  // }
  //
  // changePassword(password: string): Observable<any> {
  //   return this.http.post('api/user/change_password', password);
  // }
}
