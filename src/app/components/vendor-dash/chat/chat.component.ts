import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalService } from '../../../shared/services/global.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [TranslateModule, CommonModule, RouterLink, RouterModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  sideUsers: any[] = [];
  lang!: string;
  // ____________________________________
  constructor(private glSer: GlobalService) {
    this.sideUsers.length = 20;
    this.glSer.$langObs.subscribe((val) => (this.lang = val));
  }
  // ____________________________________
}
