import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { GlobalService } from '../../shared/services/global.service';
import { DashHeaderComponent } from './dash-header/dash-header.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { VendorSideComponent } from './vendor-side/vendor-side.component';
import { UserSideComponent } from './user-side/user-side.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterModule,
    DashHeaderComponent,
    VendorSideComponent,
    UserSideComponent,
    TranslateModule,
    CommonModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit, OnDestroy {
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
        if (this.route.url == '/dashboard') {
          this.welPage = true;
          console.log(this.welPage);
        } else {
          this.welPage = false;
          console.log(this.welPage);
        }
      }
    });
  }

  ngOnDestroy(): void {
    // this.glSer.dashloggedSt(false);
  }
  // _____________________________________________________
}
