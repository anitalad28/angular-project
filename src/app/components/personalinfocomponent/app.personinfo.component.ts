import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonalInfo, Genders, MaritalStatues, EducationalStatues } from '../../Models/app.person.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';
import { PersonalInfoService } from './../../services/app.personalInfo.service';

@Component({
  selector: 'app-new-person',
  templateUrl: './app.personinfo.view.html'
})

export class PersonalInfoComponent implements OnInit {
  // selection data
  gender = Genders;
  marital = MaritalStatues;
  education = EducationalStatues;

  // model
  personalInfo: PersonalInfo;

  // define formgroup
  personalInfoForm: FormGroup;

  PersonId: string;

  // button control for Add and Update
  add: boolean;
  update: boolean;

  constructor( private router: Router, private activatedRoute: ActivatedRoute, private personalInfoService: PersonalInfoService ) {
    this.personalInfo = new PersonalInfo( 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0 );

    this.personalInfoForm = new FormGroup({
      PersonUniqueId: new FormControl({ value: this.personalInfo.PersonUniqueId, disabled: true}),
      FirstName: new FormControl(this.personalInfo.FirstName),
      MiddleName: new FormControl(this.personalInfo.MiddleName),
      LastName: new FormControl(this.personalInfo.LastName),
      Gender: new FormControl(this.personalInfo.Gender),
      DateOfBirth: new FormControl(this.personalInfo.DateOfBirth),
      Age: new FormControl(this.personalInfo.Age),
      FlatBunglowNo: new FormControl(this.personalInfo.FlatBunglowNo),
      SocietyName: new FormControl(this.personalInfo.SocietyName),
      StreetAreaName: new FormControl(this.personalInfo.StreetAreaName),
      City: new FormControl(this.personalInfo.City),
      State: new FormControl(this.personalInfo.State),
      Pincode: new FormControl(this.personalInfo.Pincode),
      PhoneNo: new FormControl(this.personalInfo.PhoneNo),
      MobileNo: new FormControl(this.personalInfo.MobileNo),
      PhysicalDisability: new FormControl(this.personalInfo.PhysicalDisability),
      MaritalStatus: new FormControl(this.personalInfo.MaritalStatus),
      EducationalStatus: new FormControl(this.personalInfo.EducationalStatus),
      BirthSign: new FormControl(this.personalInfo.BirthSign)
    });
  }

  ngOnInit() {
  }

  addPersonalInfo() {
    const personal = {
      PersonUniqueId: this.personalInfoForm.value.PersonUniqueId,
      FirstName: this.personalInfoForm.value.FirstName,
      MiddleName: this.personalInfoForm.value.MiddleName,
      LastName: this.personalInfoForm.value.LastName,
      DateOfBirth: this.personalInfoForm.value.DateOfBirth,
      Gender: this.personalInfoForm.value.Gender,
      Age: this.personalInfoForm.value.Age,
      FlatBunglowNo: this.personalInfoForm.value.FlatBunglowNo,
      SocietyName: this.personalInfoForm.value.SocietyName,
      StreetAreaName: this.personalInfoForm.value.StreetAreaName,
      City: this.personalInfoForm.value.City,
      State: this.personalInfoForm.value.State,
      Pincode: this.personalInfoForm.value.Pincode,
      PhoneNo: this.personalInfoForm.value.PhoneNo,
      MobileNo: this.personalInfoForm.value.MobileNo,
      PhysicalDisability: this.personalInfoForm.value.PhysicalDisability,
      MaritalStatus: this.personalInfoForm.value.MaritalStatus,
      EducationalStatus: this.personalInfoForm.value.EducationalStatus,
      BirthSign: this.personalInfoForm.value.BirthSign,
      loggedInUserId: this.personalInfoForm.value.loggedInUserId
    };

    this.personalInfoService.addPersonalInfo( personal ).subscribe(
        (resp: Response) => {
          if (resp.json().status == 200) {
            this.router.navigate(['../admin-dashboard/users']);
          }
        },
        error => {
          console.log(`Error occurred :==>> ${error}`);
        }
    );
 }

}
