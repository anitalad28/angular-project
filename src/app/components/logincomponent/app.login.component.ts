import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from '../../Models/app.user.model';
import { UserService } from '../../services/app.user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NumericNonNegativeValidator } from "./../customvalidators/app.custom.validator";
import { Response } from '@angular/http';

@Component({
  selector: 'app-login-component',
  templateUrl: './app.login.view.html'
})

export class LoginComponent implements OnInit {
  user: User;
  frmControl: FormGroup;
  constructor( private serv: UserService, private router: Router, private act: ActivatedRoute ) {

    this.user = new User( 0, '', '', '', '', '');

    this.frmControl = new FormGroup({
      UserName: new FormControl(
        this.user.UserName,
        Validators.compose([
          Validators.required,
          Validators.pattern('[A-Z][A-Z-a-z ]{0,19}'),
          Validators.compose([NumericNonNegativeValidator.checkSpace])
        ])
      ),
      Password: new FormControl(
        this.user.Password,
        Validators.compose([
          Validators.required
        ])
      )
    });
  }

  ngOnInit(): void {}

  authenticateUser(): void {
      console.log('I am here' + JSON.stringify(this.user)) ;

      this.serv.authUser(this.user).subscribe(
        console.log( resp.json() );
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
