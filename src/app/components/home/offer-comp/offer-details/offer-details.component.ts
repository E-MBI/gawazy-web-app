import { Component } from '@angular/core';
import { LoadingComponent } from '../../../../shared/loading/loading.component';
import { PageSectionComponent } from '../../../shared/page-section/page-section.component';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalService } from '../../../../shared/services/global.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offer-details',
  standalone: true,
  imports: [
    LoadingComponent,
    PageSectionComponent,
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './offer-details.component.html',
  styleUrl: './offer-details.component.scss',
})
export class OfferDetailsComponent {
  lang: string = 'ar';

  // ____________________________________

  constructor(private glSer: GlobalService) {
    window.scrollTo(0, 0);
    this.glSer.$langObs.subscribe((val) => (this.lang = val));
  }

  // ____________________________________
}
