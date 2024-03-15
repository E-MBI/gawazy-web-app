import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
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
export class AppComponent implements AfterContentChecked {
  lang: string | null = '';
  loginPage!: boolean;
  dashPage!: boolean;
  // _____________________________________
  constructor(
    private translate: TranslateService,
    private globalSer: GlobalService,
    private route: Router,
    private cdRef: ChangeDetectorRef
  ) {
    if (typeof localStorage != 'undefined') {
      this.lang = localStorage.getItem('lang');
    }

    if (this.lang) {
      this.translate.use(this.lang);
      this.globalSer.changeLang(this.lang);
    }
    // set defaulte value
    this.globalSer.$loginPage.subscribe((val) => (this.loginPage = val));
    this.globalSer.$dashPage.subscribe((val) => (this.dashPage = val));
  }

  // _____________________________________
  ngAfterContentChecked() {
    this.islogPage();
    this.isDashPage();
    this.cdRef.detectChanges();
  }

  // _____________________________________

  islogPage() {
    //when route changed
    this.route.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (
          this.route.url == '/log-in' ||
          this.route.url == '/sign-up' ||
          this.route.url == '/sign-vendor' ||
          this.route.url == '/sign-user' ||
          this.route.url == '/log-user' ||
          this.route.url == '/log-vendor'
        ) {
          this.globalSer.loggedSt(true);
        } else {
          this.globalSer.loggedSt(false);
        }
      }
    });
  }

  isDashPage() {
    // when route changed
    this.route.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (
          this.route.url.includes('/user-dash') ||
          this.route.url.includes('/vendor-dash')
        ) {
          this.globalSer.dashloggedSt(true);
        } else {
          this.globalSer.dashloggedSt(false);
        }
      }
    });
  }
}
