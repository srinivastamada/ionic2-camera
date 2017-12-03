import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

let apiUrl = "http://localhost/PHP-Slim-Restful/api/";
//let apiUrl = 'https://api.thewallscript.com/restful/';

@Injectable()
export class AuthService {

  constructor(public http: Http) {
    console.log('Hello AuthService Provider');
  }

  postData(credentials, type){

    return new Promise((resolve, reject) =>{
      let headers = new Headers();
      this.http.post(apiUrl+type, JSON.stringify(credentials), {headers: headers}).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
        reject(err);
      });

    });

  }

}