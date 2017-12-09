import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Response} from "@angular/http";
import 'rxjs/Rx';

export interface IPageResponse<T> {
    content: Array<T>;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    size: number;
    totalElements: number;
    totalPages: number;
    pages: Array<number>;
}

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {
    }

    put(path: string, body: any): Observable<any> {
        return this.http.put(path, body).map(this.handleResponse).catch(this.handleError);
    }

    getEntity(path: string, id: number): Observable<any> {
        const url = `${path}/${id}`;
        return this.http.get(url).map(this.handleResponse).catch(this.handleError);
    }

    getOne(path: string): Observable<any> {
        return this.http.get(path).map(this.handleResponse).catch(this.handleError);
    }

    get<T>(path: string): Observable<Array<T>> {
        return this.http.get(path).map(this.handleResponse).catch(this.handleError);
    }

    getText(path: string): Observable<string> {
        return this.http.get(path, {responseType: 'text'}).catch(this.handleError);
    }

    post<T>(path: string, params: any, options?: {
        headers?: HttpHeaders;
        observe?: 'body';
        params?: HttpParams;
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T> {
        return this.http.post(path, params, options)
            .map(this.handleResponse)
            .catch(this.handleError);
    }

    delete(path: string): Observable<any> {
        return this.http.delete(path).map(this.handleResponse).catch(this.handleError);
    }

    getWithParameters(path: string, filterObj: any, sortBy?: string): Observable<Array<any>> {
        const filterParams = encodeURIComponent(JSON.stringify(filterObj));

        let urlPath = `${path}?filter=${filterParams}`;

        if (sortBy) {
            urlPath += '&sort=' + sortBy;
        }

        return this.http.get(urlPath)
            .map(this.handlePaged).catch(this.handleError);
    }

    getPaged<T>(path: string, page: number, size: number, filterObj?: any, filterDsl?: any,
                sort?: any): Observable<IPageResponse<T>> {
        const start = (page - 1) * size + 1;
        let url = `${path}/paged?start=${start}&count=${size}`;

        if (filterObj) {
            const filterParams = encodeURIComponent(JSON.stringify(filterObj));
            url += '&filter=' + filterParams;
        }

        if (filterDsl) {
            const filterParams = encodeURIComponent(JSON.stringify(filterDsl));
            url += '&filterDsl=' + filterParams;
        }

        if (sort) {
            url += `&sort=${sort}`;
        }

        return this.http.get(url).map(this.handlePaged).catch(this.handleError);
    }

    saveEntity(path, entity: any): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(path, JSON.stringify(entity), {headers: headers})
            .map(this.handleResponse)
            .catch(this.handleError);
    }

    deleteEntity(path, entity: any): Observable<any> {
        return this.http.delete(path, entity);
    }

    deleteEntityById(path: string, id: number): Observable<any> {
        const url = `${path}/${id}`;
        return this.http.delete(url).map(this.handleResponse).catch(this.handleError);
    }

    private handlePaged(response: any): any {
        response.pages = [];

        const start = Math.max(1, response.number - 5);
        const end = Math.min(response.number + (10 - (response.number - start + 1)), response.totalPages);

        for (let page = start; page <= end; ++page) {
            response.pages.push(page);
        }

        return response;
    }

    private handleResponse(response: Response) {
        return response;
    }

    private handleError(error: HttpErrorResponse): ErrorObservable {
        try {
            return Observable.throw(error.error);
        } catch (ex) {
            return Observable.throw(error);
        }
    }

    getBlob(path: string): Observable<Blob> {
        return this.http.get(path, {responseType: 'blob'});
    }
}
