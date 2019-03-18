import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Login } from '../../Models/app.login.model';
import { UserService } from '../../services/app.user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NumericNonNegativeValidator } from "./../customvalidators/app.custom.validator";
import { Response } from '@angular/http';

@Component({
  selector: 'app-login-component',
  templateUrl: './app.login.view.html'
})

export class LoginComponent implements OnInit {
  login: Login;
  errorLogin: boolean;
  notAuthorized = false;
  passwordDoNotMatch: boolean;
  submitted = false;

  loginFrmControl: FormGroup;
  constructor( private userService: UserService, private router: Router, private act: ActivatedRoute ) {
    this.login = new Login( '', '' );

    this.loginFrmControl = new FormGroup({
      UserName: new FormControl( this.login.UserName, Validators.required ),
      Password: new FormControl( this.login.Password, Validators.required )
    });
  }

  // convenience getter for easy access to form fields
  get formControl() { return this.loginFrmControl.controls; }

  ngOnInit(): void {
    // reset login status
    this.userService.logout();
  }

  authenticateUser(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginFrmControl.invalid) {
      return;
    }

    this.notAuthorized = false;
    this.passwordDoNotMatch = false;

    this.userService.authUser(this.loginFrmControl.value).subscribe(
      (resp: Response) => {
        console.log('Service Response - ' + JSON.stringify(resp.json()) );
        console.log('Service Response message: ' + resp.json().message);
        console.log('Service Response token:' + resp.json().token);
        console.log('Service Response role: ' + resp.json().role);
        console.log('Service Response uid:' + resp.json().uid);

        if (resp.json().status ===  200) {
          localStorage.setItem('token', resp.json().token);
          localStorage.setItem('userid', resp.json().uid);

          if (resp.json().role === 'Admin') {
            localStorage.setItem('_v_it', '1');
          } else if (resp.json().role === 'Operator') {
            localStorage.setItem('_v_it', '2');
          } else {
            localStorage.setItem('_v_it', '3');
          }
          this.navigateToAdminDashboard();
        } else {
          if (resp.json().status ===  405) {
            this.passwordDoNotMatch = true;
           } else if (resp.json().status === 404) {
            this.notAuthorized = true;
           }
        }
      },
      error => {
        console.log(`Error occurred ${error}`);
      }
    );
  }

  navigateToAdminDashboard(): void {
    this.router.navigate(['admin-dashboard']);
  }
}
