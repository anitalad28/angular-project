import { Component, OnInit } from '@angular/core';

import { User } from './../../Models/app.user.model';
import { UserService } from './../../services/app.user.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-users-component',
  templateUrl: './app.users.view.html'
})
export class UsersComponent implements OnInit {
    user: User;
    users: Array<User>;
    tableHeaders: Array<string>;

    constructor( private serv: UserService) {
        this.user = new User( 0, '', '', '', '', '');
        this.users = new Array<User>();
        this.tableHeaders = Array<string>();
    }

    // The method will be immedicatly invoked after the constructor
    ngOnInit(): void {
      // Read all properties of users and push in table then in tableHeader array
      for(let p in this.user) {
          if( this.user ){
            this.tableHeaders.push(p);
          }
      }

        // Make call to
      this.loadData();
    }

    approve(u): void {
      const usr = { uid: u._id };
      console.log(usr);

      this.serv.approveUser( usr ).subscribe(
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

      this.serv.rejectUser( usr ).subscribe(
          (resp: Response)=>{
             this.loadData();
          },
         error => {
             console.log(`Error occurred ${error}`);
         }
      );
    }

    loadData(): void {
        this.serv.getUsers().subscribe(
            (resp: Response)=>{
                this.users = resp.json().data;
                console.log( 'Users: ' + JSON.stringify( resp.json().data ) );
            },
           error => {
               console.log(`Error occurred ${error}`);
           }
       );
    }


    // getSelectedRow(p:Product):void{
    //     // 1. Create a deep copy of the selected row
    //     // 2. Assign that copy to this
    //     this.product = Object.assign({}, p);
    // }
}