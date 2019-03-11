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
  loginFrmControl: FormGroup;
  constructor( private serv: UserService, private router: Router, private act: ActivatedRoute ) {

    this.login = new Login( '', '' )
    this.loginFrmControl = new FormGroup({
      UserName: new FormControl(
        this.login.UserName,
        Validators.compose([
          Validators.required,
          Validators.pattern('[A-Z][A-Z-a-z ]{0,19}'),
          Validators.compose([NumericNonNegativeValidator.checkSpace])
        ])
      ),
      Password: new FormControl(
        this.login.Password,
        Validators.compose([
          Validators.required
        ])
      )
    });
  }

  ngOnInit(): void {}

  authenticateUser(): void {
      //this.login = this.loginFrmControl.value;
  console.log('I am here' + JSON.stringify(this.loginFrmControl.value)) ;

      this.serv.authUser(this.loginFrmControl.value).subscribe(
        
        (resp: Response) => {
            console.log('Service Response - ' + JSON.stringify(resp.json()) );
            console.log('Service Response message: ' + resp.json().message);
            console.log('Service Response token:' + resp.json().token);
            console.log('Service Response role: ' + resp.json().role);
            console.log('Service Response uid:' + resp.json().uid);
            sessionStorage.setItem('token', resp.json().token);
            this.navigateToAdminDashboard();
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
