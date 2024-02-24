import {
  AfterViewChecked,
  Component,
  DoCheck,
  HostListener,
  OnInit,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { GlobalService } from '../../shared/services/global.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SwiperComponent } from '../../shared/swiper/swiper.component';
import SwiperCore, { Navigation, Pagination, SwiperOptions } from 'swiper';
import { CardComponent } from '../shared/card/card.component';
import { PaginatorModule } from 'primeng/paginator';
import { ServsCompComponent } from './servs-comp/servs-comp.component';
import { OfferCompComponent } from './offer-comp/offer-comp.component';
import { ServMostViewComponent } from './serv-most-view/serv-most-view.component';
import { OfferMostViewComponent } from './offer-most-view/offer-most-view.component';

SwiperCore.use([Navigation, Pagination]);

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    DropdownModule,
    SwiperComponent,
    FormsModule,
    ReactiveFormsModule,
    CardComponent,
    PaginatorModule,
    ServsCompComponent,
    OfferCompComponent,
    ServMostViewComponent,
    OfferMostViewComponent,
  ],
})
export class HomeComponent implements AfterViewChecked, OnInit {
  departments = [
    {
      id: 1,
      name: 'سيارات',
    },
    {
      id: 1,
      name: 'زفاف',
    },
  ];
  lang!: string;
  depart!: string;

  // ______________________swiper _______________________
  screenWidth!: number;
  slidePerViewCats: number = 12;
  navigationCats: boolean = false;
  configCats: SwiperOptions = {
    // slidesPerView: 6,
    spaceBetween: 0,
    speed: 500,
    // navigation: false,
    autoplay: {
      // delay: 4500,
    },
    // pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  // _____________________________________________

  constructor(private glSer: GlobalService) {
    this.glSer.$langObs.subscribe((val) => (this.lang = val));
  }

  ngAfterViewChecked(): void {
    this.glSer.$langObs.subscribe((val) => (this.lang = val));
  }

  ngOnInit(): void {
    this.getScreenWindow();
  }
  // _____________________________________________

  bigSearch(e: Event | any) {
    const searchVal = e.target.value;
    console.log(searchVal);
  }

  @HostListener('window:resize', ['$event'])
  getScreenWindow() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 480) {
      this.slidePerViewCats = 4;
    } else if (this.screenWidth >= 481 && this.screenWidth <= 550) {
      this.slidePerViewCats = 5;
    } else if (this.screenWidth >= 551 && this.screenWidth <= 750) {
      this.slidePerViewCats = 6;
    } else if (this.screenWidth >= 751 && this.screenWidth <= 991) {
      this.slidePerViewCats = 8;
    } else if (this.screenWidth >= 992 && this.screenWidth <= 1400) {
      this.slidePerViewCats = 10;
    } else {
      this.slidePerViewCats = 14;
    }
  }

  // ______________________other Methods________________________
  // ___________________________________________________________
}
