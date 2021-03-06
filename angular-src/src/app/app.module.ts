import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';

import {DataService} from './services/data.service';
import {CharClassService} from './services/char-class.service';

import { CharBuildComponent } from './components/char-build/char-build.component';
import { CharBuildStartComponent } from './components/char-build/child-components/char-build-start/char-build-start.component';
import { CharBuildRaceComponent } from './components/char-build/child-components/char-build-race/char-build-race.component';
import { CharBuildThemeComponent } from './components/char-build/child-components/char-build-theme/char-build-theme.component';
import { CharBuildClassComponent } from './components/char-build/child-components/char-build-class/char-build-class.component';
import { CharBuildTrackerComponent } from './components/char-build/child-components/char-build-tracker/char-build-tracker.component';
import { CharBuildASComponent } from './components/char-build/child-components/char-build-as/char-build-as.component';
import { CharBuildClassChoicesComponent } from './components/char-build/child-components/char-build-class-choices/char-build-class-choices.component';
import { CharBuildSkillsComponent } from './components/char-build/child-components/char-build-skills/char-build-skills.component';
import { CharBuildFeatsComponent } from './components/char-build/child-components/char-build-feats/char-build-feats.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path: 'charBuild', component: CharBuildComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    CharBuildComponent,
    CharBuildStartComponent,
    CharBuildRaceComponent,
    CharBuildThemeComponent,
    CharBuildClassComponent,
    CharBuildTrackerComponent,
    CharBuildASComponent,
    CharBuildClassChoicesComponent,
    CharBuildSkillsComponent,
    CharBuildFeatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ValidateService,AuthService,AuthGuard,DataService,CharClassService],
  bootstrap: [AppComponent]
})
export class AppModule { }
