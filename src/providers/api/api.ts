import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  urlApi:any = 'YourApiUrl';
  option:any;

  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');

    let headers = new Headers();
    headers.append('Content-Type','aplication/json');
    headers.append('Content-Type','application/x-www-form-urlencoded');

    this.option = new RequestOptions({headers: headers});
  }

  postData(userData, type) {
    return this.http
              .post(this.urlApi+type, userData, this.option)
              .map(res => res.json());
  }

  getData(type) {
    return this.http
              .get(this.urlApi+type)
              .map(res => res.json());
  }

}
