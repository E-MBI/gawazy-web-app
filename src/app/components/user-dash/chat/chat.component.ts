import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  sideUsers: any[] = [];
  // ____________________________________
  constructor() {
    this.sideUsers.length = 3;
  }
  // ____________________________________
}
