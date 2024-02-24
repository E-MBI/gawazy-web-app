import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ClickOutSideDirective } from '../../shared/directives/clickoutside.directive';
import { GlobalService } from '../../shared/services/global.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TranslateModule,
    ClickOutSideDirective,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    SidebarModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  openMenu: boolean = false;
  lang!: string;
  showSideBar: boolean = false;
  // ____________________________________________________________

  constructor(
    private translate: TranslateService,
    private globalSer: GlobalService
  ) {}

  // ____________________________________________________________

  ngOnInit(): void {
    this.globalSer.$langObs.subscribe((val) => (this.lang = val));
  }

  switchLang(lang: string) {
    this.globalSer.changeLang(lang);
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
  }

  controlMenu(status: boolean) {
    this.openMenu = status;
  }
}
