import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";
import { HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class ApiService{
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  get(url : string): Observable<any> {
    console.log("here ", url)
    return this.http.get(url);
      // .toPromise()
      // .then(response => {
      //   response.json().data;
      // console.log(response)
      // })
      // .catch(this.handleError);
  }

  delete(url : string): Promise<void> {
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(url: string, obj:any): Promise<any> {
    return this.http
      .post(url, JSON.stringify({name: obj}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(url:string, obj:any): Promise<any> {
    return this.http
      .put(url, JSON.stringify(obj), {headers: this.headers})
      .toPromise()
      .then(res => res)
      .catch(this.handleError);
  }

  post(path: string, params: any, options?: {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}): Observable<any> {
  return this.http.post(path, params)
    // return this.http.post(path, params, options)
    .map(this.handleResponse)
    .catch(this.handleError);
}


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private handleResponse(response: Response) {
    return response;
  }

}
