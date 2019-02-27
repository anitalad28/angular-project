import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core' ;
import { LoginComponent } from './../components/logincomponent/app.login.component';
import { AdminDashboardComponent } from './../components/admincomponent/app.admindashboard.component';
import { UsersComponent } from './../components/usercomponent/app.users.component';
// import { AppGaurdService } from "../../services/app.test.gaurd.service";
// import { ErrorComponent } from "./app.error.component";


// const routes:Routes = [
//     { path: 'about/:id', component:AboutComponent},
//     { path: 'contact', component:ContactComponent,
//     children : [
//                     { path: 'product', component:ProductComponent}
//                 ]
//     }
//    ];

//  Define route table
const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'admindashboard', component: AdminDashboardComponent},
  { path: 'users', component: UsersComponent},
  // { path: 'about/:id', component:AboutComponent},
  // {
  //     path: 'contact',
  //     component:ContactComponent ,
  //     canActivate: [AppGaurdService]
  // },
  // {
  //     path: "error",
  //     component: ErrorComponent
  // }
  ];

  // register the routeTable for root of the current angular app
// When "routig is provided " to imports of NgModule
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
