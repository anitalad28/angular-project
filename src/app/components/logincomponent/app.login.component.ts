import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/app.user.model';
import { UserService } from '../../services/app.user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

@Component({
  selector: 'app-login-component',
  templateUrl: './app.login.view.html'
})

export class LoginComponent implements OnInit {
  user: User;
  constructor( private serv: UserService, private router: Router, private act: ActivatedRoute ) {
    this.user = new User( 0, '', '', '', '', '', '');
  }

  ngOnInit(): void {}

  authenticateUser(): void {
      console.log('I am here' + JSON.stringify(this.user)) ;

      this.serv.authUser(this.user).subscribe(
        (resp: Response) => {
            console.log('Service Response - ' + JSON.stringify(resp.json()) );
            console.log('Service Response message: ' + resp.json().message);
            console.log('Service Response token:' + resp.json().token);
            console.log('Service Response role: ' + resp.json().role);
            console.log('Service Response uid:' + resp.json().uid);
            sessionStorage.setItem('token', resp.json().token);
            this.navigateToAdminDashboard();
            //this.navigateToUsers();
        },
        error => {
            console.log(`Error occurred ${error}`);
        }
      );
  }

  navigateToAdminDashboard(): void {
    this.router.navigate(['admindashboard']);
  }
}
