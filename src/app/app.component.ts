import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { GlobalService } from './shared/services/global.service';
import { LoadingComponent } from './shared/loading/loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ProgressSpinnerModule,
    HeaderComponent,
    FooterComponent,
    TranslateModule,
    LoadingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  lang: string | null = '';
  loginPage!: boolean;
  dashPage!: boolean;
  // _____________________________________
  constructor(
    private translate: TranslateService,
    private globalSer: GlobalService,
    private route: Router
  ) {
    if (typeof localStorage != 'undefined') {
      this.lang = localStorage.getItem('lang');
    }

    if (this.lang) {
      this.translate.use(this.lang);
      this.globalSer.changeLang(this.lang);
    }

    this.islogPage();
    this.isDashPage();
  }

  // _____________________________________

  islogPage() {
    this.globalSer.$loginPage.subscribe((val) => (this.loginPage = val));
    //when route changed
    this.route.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (
          this.route.url == '/log-in' ||
          this.route.url == '/sign-up' ||
          this.route.url == '/sign-vendor' ||
          this.route.url == '/sign-user'
        ) {
          this.loginPage = true;
          this.globalSer.loggedSt(true);
        } else {
          this.loginPage = false;
          this.globalSer.loggedSt(false);
        }
      }
    });
  }

  isDashPage() {
    this.globalSer.$dashPage.subscribe((val) => (this.dashPage = val));
    // when route changed
    this.route.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (this.route.url.includes('/dashboard')) {
          this.globalSer.dashloggedSt(true);
        } else {
          this.globalSer.dashloggedSt(false);
        }
      }
    });
  }
}
