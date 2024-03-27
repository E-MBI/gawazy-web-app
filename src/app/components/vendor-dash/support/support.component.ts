import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './support.component.html',
  styleUrl: './support.component.scss',
})
export class SupportComponent {
  constructor() {}
}
