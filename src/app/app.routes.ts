import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Error404Component } from './components/error404/error404.component';
import { HelpComponent } from './components/help/help.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignVendorComponent } from './components/sign-vendor/sign-vendor.component';
import { SignUserComponent } from './components/sign-user/sign-user.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'log-in', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-user', component: SignUserComponent },
  { path: 'sign-vendor', component: SignVendorComponent },
  { path: 'support', component: HelpComponent },
  { path: '**', component: Error404Component },
];
