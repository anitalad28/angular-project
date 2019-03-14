import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonalInfo, Gender, MaritalStatus, EducationalStatues } from '../../Models/app.person.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';
import { PersonalInfoService } from './../../services/app.personalInfo.service';

@Component({
  selector: 'app-new-person',
  templateUrl: './app.personinfo.view.html'
})

export class PersonalInfoComponent implements OnInit {
  // selection data
  gender = Gender;
  maritalStatus = MaritalStatus;
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
    this.add = true;
    this.update = false;

    this.personalInfo = new PersonalInfo( 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0 );

    this.personalInfoForm = new FormGroup({
      PersonUniqueId: new FormControl(this.personalInfo.PersonUniqueId),
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
      Education: new FormControl(this.personalInfo.education),
      BirthSign: new FormControl(this.personalInfo.BirthSign)
    });
  }

  ngOnInit() {
    this.PersonId = this.activatedRoute.snapshot.params.uid;
    if (this.activatedRoute.snapshot.params.act !== undefined) {
      this.add = false;
      this.update = true;

  //     this.PersonalInfoService.getPersonsById(this.PersonId).subscribe(
  //       (resp: Response) => {
  //         if (resp.json().status == 200) {
  //           const person = resp.json().data[0];
  //           this.person = new Person(
  //             this.PersonId,
  //             person.FullName.FirstName,
  //             person.FullName.MiddleName,
  //             person.FullName.LastName,
  //             person.Gender,
  //             person.DateOfBirth,
  //             person.Age,
  //             person.Address.FlatNumber,
  //             person.Address.SocietyName,
  //             person.Address.AreaName,
  //             person.City,
  //             person.State,
  //             person.Pincode,
  //             person.PhoneNo,
  //             person.MobileNo,
  //             person.PhysicalDisability,
  //             person.MaritalStatus,
  //             person.Education,
  //             person.BirthSign,
  //             0
  //           );
  //         }
  //       },
  //       error => {
  //         console.log(`Error occurred :==>> ${error}`);
  //       }
  //     );
  //   }
  // }

  // cancel() {
  //   this._router.navigate(['/auth']);
  // }

  save() {
   // if (this.add) {
      this.personalInfo = this.personalInfoForm.value;
     // this.person.CreatedBy = parseInt(localStorage.getItem('_v_it'));
      this.personalInfoService.addPersonalInfo(this.person).subscribe(
        (resp: Response) => {
          if (resp.json().status == 200) {
            this._router.navigate(['/auth']);
          }
        },
        error => {
          console.log(`Error occurred :==>> ${error}`);
        }
      );
    // } else {
    //   this.person = this.newPersonForm.value;
    //   this.person.CreatedBy = parseInt(localStorage.getItem('_v_it'));
    //   this._newPersonService.updatePerson(this.person).subscribe(
    //     (resp: Response) => {
    //       if (resp.json().status == 200) {
    //         this._router.navigate(['/auth']);
    //       }
    //     },
    //     error => {
    //       console.log(`Error occurred :==>> ${error}`);
    //     }
    //   );
    // }
  }
}
