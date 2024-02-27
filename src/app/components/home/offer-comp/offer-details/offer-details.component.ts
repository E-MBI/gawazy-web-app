import { Component } from '@angular/core';
import { LoadingComponent } from '../../../../shared/loading/loading.component';
import { PageSectionComponent } from '../../../shared/page-section/page-section.component';

@Component({
  selector: 'app-offer-details',
  standalone: true,
  imports: [LoadingComponent, PageSectionComponent],
  templateUrl: './offer-details.component.html',
  styleUrl: './offer-details.component.scss',
})
export class OfferDetailsComponent {
  constructor() {
    window.scrollTo(0, 0);
  }
}
