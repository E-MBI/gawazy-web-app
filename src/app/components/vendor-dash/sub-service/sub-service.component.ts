import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';
import { GlobalService } from '../../../shared/services/global.service';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sub-service',
  standalone: true,
  imports: [
    TranslateModule,
    FormsModule,
    DropdownModule,
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    RouterModule,
  ],
  templateUrl: './sub-service.component.html',
  styleUrl: './sub-service.component.scss',
})
export class SubServiceComponent {
  lang!: string;
  checkAll: boolean = false;
  // _________________________________________________
  constructor(private gSer: GlobalService) {
    this.gSer.$langObs.subscribe((val) => (this.lang = val));
  }

  // _________________________________________________

  checkAllSt() {
    this.checkAll = !this.checkAll;
  }
  disLikeServ() {}
  likeServ() {}
}
