import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RolesService } from './../../services/app.roles.service';
import { Response } from '@angular/http';
import { log } from 'util';

@Component({
  selector: 'app-roles',
  templateUrl: './app.role.view.html'
})

export class RolesComponent implements OnInit {
  uniqueRole: boolean;
  roleForm: FormGroup;
  RoleName: string;
  roles;

  constructor(private router: Router, private roleService: RolesService) {
    this.roleForm = new FormGroup({
      RoleName: new FormControl(this.RoleName, Validators.required)
    });
   // this.uniqueRole = false;
  }

  ngOnInit() {
    this.loadRoles();
  }

  cancel() {
  }

  // creating new role
  save() {
    this.RoleName = this.roleForm.value;
    this.roleService.createRole(this.RoleName).subscribe(
      (resp: Response) => {
        if (resp.json().status === 200) {
         // this.roles = resp.json().roles;
        }
      },
      error => {
        console.log(`Error occurred :==>> ${error}`);
      }
    );
  }


  loadRoles(): void {
    this.roleService.getRoles().subscribe(
      (resp: Response) => {
        if (resp.json().status === 200) {
            this.roles = resp.json().data;
        }
      },
      error => {
        console.log(`Error occurred :==>> ${error}`);
      }
    );
  }

  // Unique role
  checkUniqueRole() {
    this.RoleName = this.roleForm.value;
    this.roleService.checkRole( this.RoleName ).subscribe(
      ( resp: Response ) => {
        console.log( JSON.stringify(resp.json()));
        if (resp.json().status === 200) {
          this.uniqueRole = true;
        }
      },
      error => {
        if (error.status === 404) {
          this.uniqueRole = false;
        }
        console.log(`Error occurred :==>> ${error}`);
      }
    );
  }
}
