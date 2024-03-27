import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { GlobalService } from '../../../shared/services/global.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [RouterLink, RouterModule, CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent {
  lang!: string;
  notifications: any[] = [];
  // ___________________________________
  constructor(private glSer: GlobalService) {
    this.notifications.length = 15;
    this.glSer.$langObs.subscribe((val) => (this.lang = val));
  }
  // ___________________________________
}
