import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorDashComponent } from './vendor-dash.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { NotificationComponent } from './notification/notification.component';
import { SettingsComponent } from './settings/settings.component';
import { ChatComponent } from './chat/chat.component';
import { SupportComponent } from './support/support.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { EditSerFileComponent } from './edit-ser-file/edit-ser-file.component';
import { SubServiceComponent } from './sub-service/sub-service.component';
import { DraftComponent } from './draft/draft.component';
import { MakeOfferComponent } from './make-offer/make-offer.component';
import { LatestWorkComponent } from './latest-work/latest-work.component';
import { MyOffersComponent } from './my-offers/my-offers.component';
import { AddSubSerComponent } from './sub-service/add-sub-ser/add-sub-ser.component';

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
      { path: 'my-services', component: MyServicesComponent },
      { path: 'edit-service-file', component: EditSerFileComponent },
      { path: 'sub-services', component: SubServiceComponent },
      { path: 'add-sub-service', component: AddSubSerComponent },
      { path: 'draft', component: DraftComponent },
      { path: 'make-offer', component: MakeOfferComponent },
      { path: 'latest-work', component: LatestWorkComponent },
      { path: 'my-offers', component: MyOffersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorDashRoutingModule {}
