import { AfterViewChecked, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalService } from '../../shared/services/global.service';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterLink, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements AfterViewChecked {
  lang!: string;
  dashPage!: boolean;
  constructor(private glSer: GlobalService, private route: Router) {
    this.glSer.$langObs.subscribe((val) => (this.lang = val));

    //  when log to dashboard
    this.isDashPage();
  }

  ngAfterViewChecked(): void {
    this.glSer.$langObs.subscribe((val) => (this.lang = val));
  }

  isDashPage() {
    this.glSer.$dashPage.subscribe((val) => (this.dashPage = val));
    // when route changed
    this.route.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (this.route.url.includes('/dashboard')) {
          this.glSer.dashloggedSt(true);
        } else {
          this.glSer.dashloggedSt(false);
        }
      }
    });
  }
}
