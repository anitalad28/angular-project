import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User, Roles } from '../../Models/app.user.model';
import { UserService } from './../../services/app.user.service';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-component',
  templateUrl: './app.users.view.html'
})
export class UsersComponent implements OnInit {
    user: User;
    users: Array<User>;
    tableHeaders: Array<string>;

    // error message
   uniqueUserName: boolean = false;

   // roles for select list
    roles = Roles;

    // define formgroup
    newUserForm: FormGroup;

    // button control for Add and Update
    add: boolean;
    update: boolean;

    constructor( private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) {
        this.user = new User( 0, '', '', '', '', '');
        this.users = new Array<User>();
        this.tableHeaders = Array<string>();

        console.log( 'Roles:-' + Roles );

        this.add = true;
        this.update = false;

        this.newUserForm = new FormGroup({
          UserId: new FormControl(this.user.UserName, Validators.required),
          UserName: new FormControl(this.user.UserName, Validators.required),
          Password: new FormControl(this.user.Password, Validators.required),
          EmailAddress: new FormControl(this.user.EmailAddress, Validators.required),
          Role: new FormControl(this.user.Role)
      });
    }

    // The method will be immedicatly invoked after the constructor
    ngOnInit(): void {
      // Read all properties of users and push in table then in tableHeader array
      for ( const p in this.user) {
          if( this.user ) {
            this.tableHeaders.push(p);
          }
      }

     // this.UserId = this.activatedRoute.snapshot.params.uid;
      console.log( 'activatedRoute:: ' + JSON.stringify( this.activatedRoute.snapshot.params )  );

      // if (this._activatedRoute.snapshot.params.act !== undefined) {
      //   this.add = false;
      //   this.update = true;
      // Make call to
      this.loadData();
    }

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

      this.userService.createUser(user).subscribe(
        (resp: Response) => {
          if (resp.json().status === 200) {
            this.loadData();
          }
        },
        error => {
          console.log(`Error occurred :==>> ${error}`);
        }
      );
    }

   updateUser() {
      const user = {
        UserId : this.newUserForm.value.UserId,
        UserName : this.newUserForm.value.UserName,
        EmailAddress: this.newUserForm.value.EmailAddress,
        Password: this.newUserForm.value.Password,
        Role: this.newUserForm.value.Role,
        IsApproved: 'Pending'
      };

      this.userService.updateUser(user).subscribe(
        (resp: Response) => {
          if (resp.json().status === 200) {
            this.loadData();
          }
        },
        error => {
          console.log(`Error occurred :==>> ${error}`);
        }
      );
    }

    approve(u): void {
      const usr = { uid: u._id };
      console.log(usr);

      this.userService.approveUser( usr ).subscribe(
          (resp: Response)=>{
             this.loadData();
          },
         error => {
             console.log(`Error occurred ${error}`);
         }
      );
    }

    reject(u): void {
      const usr = { uid: u._id };
      console.log(usr);

      this.userService.rejectUser( usr ).subscribe(
          (resp: Response)=>{
             this.loadData();
          },
         error => {
             console.log(`Error occurred ${error}`);
         }
      );
    }

    loadData(): void {
        this.userService.getUsers().subscribe(
            (resp: Response)=>{
                this.users = resp.json().data;
                console.log( 'Users: ' + JSON.stringify( resp.json().data ) );
            },
           error => {
               console.log(`Error occurred ${error}`);
           }
       );
    }

    getselectedrow( u: User ): void {
      // 1. Create a deep copy of the selected row
      // 2. Assign that copy to this
      this.user = Object.assign({}, u);

      console.log( this.user );

    }
}
