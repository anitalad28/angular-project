import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { PersonalInfo } from './../Models/app.person.model';

@Injectable({
  providedIn: 'root'
})

export class PersonalInfoService {
  url: string;

  constructor(private http: Http) {
    this.url = 'http://localhost:6060';
  }

  addPersonalInfo( personalInfo: PersonalInfo ): Observable< Response > {
    console.log('I am in the add person info service ' + JSON.stringify( personalInfo
      ));
    let resp: Observable< Response >;

    let header: Headers = new Headers({'Content-Type': 'application/json'});
    let options: RequestOptions = new RequestOptions();

    options.headers = header;

    resp = this.http.post( `${this.url}/api/personalInfo/registration`,
                            JSON.stringify(personalInfo),
                            options );
    return resp;
}

  // // get all persons information based on status like 'approved', 'pending'
  // getPersonsByStatus(person): Observable<Response> {
  //   let resp: Observable<Response>;
  //   const header: Headers = new Headers({ 'Content-Type': 'application/json' });
  //   header.append('AUTHORIZATION', localStorage.getItem('token'));
  //   const options: RequestOptions = new RequestOptions();
  //   options.headers = header;
  //   resp = this.http.post(
  //     `${this.url}/api/person`,
  //     JSON.stringify(person),
  //     options
  //   );
  //   return resp;
  // }

  // // approve or reject the user
  // personApproval(person): Observable<Response> {
  //   let resp: Observable<Response>;
  //   const header: Headers = new Headers({ 'Content-Type': 'application/json' });
  //   header.append('AUTHORIZATION', localStorage.getItem('token'));
  //   const options: RequestOptions = new RequestOptions();
  //   options.headers = header;
  //   resp = this.http.post(
  //     `${this.url}/api/person/approve`,
  //     JSON.stringify(person),
  //     options
  //   );

  //   return resp;
  // }


  // // get person by person id
  // getPersonsById(pid): Observable<Response> {
  //   let resp: Observable<Response>;
  //   const header: Headers = new Headers({ 'Content-Type': 'application/json' });
  //   header.append('AUTHORIZATION', localStorage.getItem('token'));
  //   const options: RequestOptions = new RequestOptions();
  //   options.headers = header;
  //   resp = this.http.get(
  //     `${this.url}/api/person/${pid}`,
  //     options
  //   );
  //   return resp;
  // }

  // // create new person
  // updatePerson(person): Observable<Response> {
  //   let resp: Observable<Response>;
  //   const header: Headers = new Headers({ 'Content-Type': 'application/json' });
  //   header.append('AUTHORIZATION', localStorage.getItem('token'));
  //   const options: RequestOptions = new RequestOptions();
  //   options.headers = header;
  //   resp = this.http.put(
  //     `${this.url}/api/person/update`,
  //     JSON.stringify(person),
  //     options
  //   );

  //   return resp;
  // }
}
