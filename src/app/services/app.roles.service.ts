import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RolesService {
  url: string;

  constructor(private http: Http) {
    this.url = 'http://localhost:6060';
  }

  // create role
  createRole(role): Observable<Response> {
    console.log('I am in the role creation service ');

    let resp: Observable<Response>;
    let header: Headers = new Headers({'Content-Type': 'application/json'});

    header.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    // 2. Define request option for heder
    // Collection of header values
    let options: RequestOptions = new RequestOptions();

    options.headers = header;
    resp = this.http.post( `${this.url}/api/admin/createRole`,
                            JSON.stringify(role),
                            options );
    return resp;
  }

  // getting all roles
  getRoles(): Observable<Response> {
    console.log('I am in get roles service ');

    let resp: Observable<Response>;
    let header: Headers = new Headers({'Content-Type': 'application/json'});

    header.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    // 2. Define request option for heder
    // Collection of header values
    let options: RequestOptions = new RequestOptions();

    options.headers = header;
    resp = this.http.get( `${this.url}/api/roles`,
                            options );
    return resp;
  }

  // create role
  checkRole(role): Observable<Response> {
    console.log('I am in check role service ');

    let resp: Observable<Response>;
    let header: Headers = new Headers({'Content-Type': 'application/json'});

    header.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    // 2. Define request option for heder
    // Collection of header values
    let options: RequestOptions = new RequestOptions();

    options.headers = header;
    resp = this.http.post( `${this.url}/api/roles`,
                            JSON.stringify(role),
                            options );
    return resp;
  }
}
