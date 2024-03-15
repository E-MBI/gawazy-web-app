import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorDashComponent } from './vendor-dash.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { NotificationComponent } from './notification/notification.component';
import { SettingsComponent } from './settings/settings.component';
import { ChatComponent } from './chat/chat.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {
    path: '',
    component: VendorDashComponent,
    children: [
      {
        path: '',
        redirectTo: 'favorite',
        pathMatch: 'full',
      },
      { path: 'favorite', component: FavoriteComponent },
      { path: 'notification', component: NotificationComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'support', component: SupportComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorDashRoutingModule {}
