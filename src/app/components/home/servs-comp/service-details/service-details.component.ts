import { Component } from '@angular/core';
import { LoadingComponent } from '../../../../shared/loading/loading.component';

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss',
})
export class ServiceDetailsComponent {
  constructor() {
    window.scrollTo(0, 0);
  }
}
