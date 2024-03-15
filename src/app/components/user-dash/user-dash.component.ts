import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { GlobalService } from '../../shared/services/global.service';
import { DashHeaderComponent } from './dash-header/dash-header.component';
import { UserSideComponent } from './user-side/user-side.component';

@Component({
  selector: 'app-user-dash',
  standalone: true,
  imports: [
    RouterModule,
    DashHeaderComponent,
    UserSideComponent,
    TranslateModule,
    CommonModule,
  ],
  templateUrl: './user-dash.component.html',
  styleUrl: './user-dash.component.scss',
})
export class UserDashComponent implements OnInit, OnDestroy {
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
        if (this.route.url == '/user-dash') {
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
