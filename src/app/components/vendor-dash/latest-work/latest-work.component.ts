import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-latest-work',
  standalone: true,
  imports: [TranslateModule, RouterLink, RouterModule],
  templateUrl: './latest-work.component.html',
  styleUrl: './latest-work.component.scss',
})
export class LatestWorkComponent {}
