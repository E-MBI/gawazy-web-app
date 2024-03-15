import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalService } from '../../../shared/services/global.service';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-side',
  standalone: true,
  imports: [TranslateModule, CommonModule, RouterModule, RouterLink],
  templateUrl: './user-side.component.html',
  styleUrl: './user-side.component.scss',
})
export class UserSideComponent {
  lang!: string;

  // ______________________________________
  constructor(private glSer: GlobalService) {}
  // ______________________________________
  ngOnInit(): void {
    this.glSer.$langObs.subscribe((val) => (this.lang = val));
  }
}
