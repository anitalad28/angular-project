// 1. Angular module file
import { NgModule } from '@angular/core';

// 2. Import all standard modules
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// 3. Import all components and directives
import { AppComponent } from './app.component';
import { LoginComponent } from './components/logincomponent/app.login.component';
import { AdminDashboardComponent } from './components/admincomponent/app.admindashboard.component';
import { UsersComponent } from './components/userscomponent/app.users.component';
import { UserComponent } from './components/usercomponent/app.user.component';

// 4. Import all services
import { UserService } from './services/app.user.service';
import { routing } from './routerComponent/app.route.table';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

