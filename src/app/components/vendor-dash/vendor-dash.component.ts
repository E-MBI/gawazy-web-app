import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { GlobalService } from '../../shared/services/global.service';
import { VendorSideComponent } from './vendor-side/vendor-side.component';
import { DashHeaderComponent } from './dash-header/dash-header.component';

@Component({
  selector: 'app-vendor-dash',
  standalone: true,
  imports: [
    RouterModule,
    DashHeaderComponent,
    VendorSideComponent,
    TranslateModule,
    CommonModule,
  ],
  templateUrl: './vendor-dash.component.html',
  styleUrl: './vendor-dash.component.scss',
})
export class VendorDashComponent {
  lang!: string;
  welPage: boolean = true;

  // _____________________________________________________
  constructor(private glSer: GlobalService, private route: Router) {
    this.welcomePgae();
  }

  ngOnInit(): void {
    this.glSer.dashloggedSt(true);
    this.glSer.$langObs.subscribe((val) => (this.lang = val));
  }

  welcomePgae() {
    this.route.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (this.route.url == '/vendor-dash') {
          this.welPage = true;
        } else {
          this.welPage = false;
        }
      }
    });
  }

  ngOnDestroy(): void {
    // this.glSer.dashloggedSt(false);
  }
  // _____________________________________________________
}
