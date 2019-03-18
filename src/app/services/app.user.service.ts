import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { User } from '../Models/app.user.model';

@Injectable()

export class UserService {
  url: string;
  constructor( private http: Http ){
      this.url =  'http://localhost:6060';
  }

  authUser( usr: User ): Observable< Response > {
      console.log('I am in the service ' + JSON.stringify(usr));
      let resp: Observable< Response >;
      let header: Headers = new Headers({'Content-Type': 'application/json'});
      let options: RequestOptions = new RequestOptions();
      options.headers = header;

      resp = this.http.post( `${this.url}/api/user/login`,
                              JSON.stringify(usr),
                              options );
      return resp;
  }

  getUsers(): Observable<Response> {
    console.log('I am in the get users service ');

    let resp: Observable<Response>;
    let header: Headers = new Headers({'Content-Type': 'application/json'});

    header.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    // 2. Define request option for heder
    // Collection of header values
    let options: RequestOptions = new RequestOptions();

    options.headers = header;
    resp = this.http.get( `${this.url}/api/users`,
                            options );
    return resp;
  }

  updateUser( user ): Observable<Response> {
    console.log('I am in the update user service ');

    let resp: Observable<Response>;
    let header: Headers = new Headers({'Content-Type': 'application/json'});

    header.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    // 2. Define request option for heder
    // Collection of header values
    let options: RequestOptions = new RequestOptions();

    options.headers = header;
    resp = this.http.put( `${this.url}/api/user/update`,
                            JSON.stringify(user),
                            options );


    return resp;
  }

  approveUser( user ): Observable<Response> {
    console.log('I am in the approve user service ');

    let resp: Observable<Response>;
    let header: Headers = new Headers({'Content-Type': 'application/json'});

    header.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    // 2. Define request option for heder
    // Collection of header values
    let options: RequestOptions = new RequestOptions();

    options.headers = header;
    resp = this.http.put( `${this.url}/api/user/approve`,
                            JSON.stringify(user),
                            options );


    return resp;
  }

  rejectUser( user ): Observable<Response> {
    console.log('I am in the reject user service ');

    let resp: Observable<Response>;
    let header: Headers = new Headers({'Content-Type': 'application/json'});

    header.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    // 2. Define request option for heder
    // Collection of header values
    let options: RequestOptions = new RequestOptions();

    options.headers = header;
    resp = this.http.put( `${this.url}/api/user/reject`,
                            JSON.stringify(user),
                            options );


    return resp;
  }

  // unique user name checking
  uniqueUsernameCheck(uname): Observable<Response> {
    console.log('I am in the unique user service ');

    let resp: Observable<Response>;
    let header: Headers = new Headers({'Content-Type': 'application/json'});

    header.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    // 2. Define request option for heder
    // Collection of header values
    let options: RequestOptions = new RequestOptions();

    options.headers = header;
    resp = this.http.post( `${this.url}/api/user/checkUserName`,
                            JSON.stringify(uname),
                            options );


    return resp;
  }

  // create a user
  createUser(user): Observable<Response> {
    console.log('I am in the Add new user service ');

    let resp: Observable<Response>;
    let header: Headers = new Headers({'Content-Type': 'application/json'});

    header.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    // 2. Define request option for heder
    // Collection of header values
    let options: RequestOptions = new RequestOptions();

    options.headers = header;
    resp = this.http.post( `${this.url}/api/user/create`,
                            JSON.stringify(user),
                            options );


    return resp;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('_v_it');
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
  }

}
