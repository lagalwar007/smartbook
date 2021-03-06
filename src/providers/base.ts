import { Injectable } from '@angular/core';
import { Response, RequestOptionsArgs, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class Base {
  constructor(public http: Http) {
    console.log('base');  
  }

  protected postData<T>(url: string, body: any, options?: RequestOptionsArgs): Observable<T> {
    return this.http.post(url, body)
      .map(res => res)
      .catch(this.handleError);
  }

  protected getData<T>(url: string, options?: RequestOptionsArgs): Observable<T> {
    return this.http.get(url)
      .map(res => res)
      .catch(this.handleError)
  }

  private parseResponse(res: Response) {
    console.log("response", res);

    let contentType = res.headers.get("Content-Type");
    if (contentType.indexOf("application/json") > -1) {
      return res.json();
    }

    throw new Error("Unsupported response content type - " + contentType);
  }

  private handleError(error: Response | any) {
    console.error(error);

    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  protected joinUrl(...parts: string[]) {
    return parts.join("");
  }
}