import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { Error404Component } from './components/error404/error404.component';
import { HelpComponent } from './components/help/help.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { SignVendorComponent } from './components/auth/sign-vendor/sign-vendor.component';
import { SignUserComponent } from './components/auth/sign-user/sign-user.component';
import { ServiceDetailsComponent } from './components/home/servs-comp/service-details/service-details.component';
import { OfferDetailsComponent } from './components/home/offer-comp/offer-details/offer-details.component';
import { CategoryComponent } from './components/category/category.component';
import { LoginComponent } from './components/auth/login/login.component';
import { LogUserComponent } from './components/auth/log-user/log-user.component';
import { LogVendorComponent } from './components/auth/log-vendor/log-vendor.component';
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'log-in', component: LoginComponent },
  { path: 'log-user', component: LogUserComponent },
  { path: 'log-vendor', component: LogVendorComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-user', component: SignUserComponent },
  { path: 'sign-vendor', component: SignVendorComponent },
  { path: 'category/:category_id', component: CategoryComponent },
  { path: 'support', component: HelpComponent },
  { path: 'services/:service_id', component: ServiceDetailsComponent },
  { path: 'offers/:offer_id', component: OfferDetailsComponent },

  {
    path: 'user-dash',
    loadChildren: () =>
      import('./components/user-dash/user-dash.module').then(
        (m) => m.UserDashModule
      ),
  },

  {
    path: 'vendor-dash',
    loadChildren: () =>
      import('./components/vendor-dash/vendor-dash.module').then(
        (m) => m.VendorDashModule
      ),
  },

  { path: '**', component: Error404Component },
];
