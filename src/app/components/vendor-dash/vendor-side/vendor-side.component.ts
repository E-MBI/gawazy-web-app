import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalService } from '../../../shared/services/global.service';

@Component({
  selector: 'app-vendor-side',
  standalone: true,
  imports: [TranslateModule, CommonModule, RouterModule, RouterLink],
  templateUrl: './vendor-side.component.html',
  styleUrl: './vendor-side.component.scss',
})
export class VendorSideComponent {
  lang!: string;

  // ______________________________________
  constructor(private glSer: GlobalService) {}
  // ______________________________________
  ngOnInit(): void {
    this.glSer.$langObs.subscribe((val) => (this.lang = val));
  }
}
