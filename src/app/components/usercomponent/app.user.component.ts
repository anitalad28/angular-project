import { Component, OnInit } from '@angular/core';
import { User, Roles } from '../../Models/app.user.model';
// import { Roles } from '../../Models/app.role.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { UserService } from '../../services/app.user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './app.user.view.html'
})

export class UserComponent implements OnInit {

  // error message
  uniqueUserName: boolean = false;

  // user model
  user: User;

  // roles for select list
  roles = Roles;

  // define formgroup
  newUserForm: FormGroup;

  constructor( private router: Router, private userService: UserService ) {
    console.log( 'Roles:-' + Roles );
    this.user = new User( 0,'', '', '', '', '');

    this.newUserForm = new FormGroup({
      UserId: new FormControl(this.user.UserName, Validators.required),
      UserName: new FormControl(this.user.UserName, Validators.required),
      Password: new FormControl(this.user.Password, Validators.required),
      EmailAddress: new FormControl(this.user.EmailAddress, Validators.required),
      Role: new FormControl(this.user.Role)
    });
  }

  ngOnInit() {}

  checkUniqueUserName() {
    const username = this.newUserForm.value.UserName;

    this.userService.uniqueUsernameCheck({ UserName: username }).subscribe(
      (resp: Response) => {
        if (resp.json().status == 200) {
          this.uniqueUserName = true;
        } else {
          this.uniqueUserName = false;
        }
      },
      error => {
        this.uniqueUserName = false;
        console.log(`Error occurred :==>> ${error}`);
      }
    );
  }

  cancel() {}

  addNewUser() {
    const user = {
      UserId : this.newUserForm.value.UserId,
      UserName : this.newUserForm.value.UserName,
      EmailAddress: this.newUserForm.value.EmailAddress,
      Password: this.newUserForm.value.Password,
      Role: this.newUserForm.value.Role,
      IsApproved: 'Pending'
    };
    console.log('ADD NEW USER' + user);
    this.userService.createUser(user).subscribe(
      (resp: Response) => {
        if (resp.json().status == 200) {
          this.router.navigate([`/admin-dashboard/users/`]);
        }
      },
      error => {
        console.log(`Error occurred :==>> ${error}`);
      }
    );
  }
}
