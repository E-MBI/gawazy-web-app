import {
  ChangeDetectorRef,
  Component,
  HostListener,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { SwiperComponent } from '../../../shared/swiper/swiper.component';
import { SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';
import { RouterLink } from '@angular/router';
import { SendReqService } from '../../../shared/services/send-req.service';
import { GlobalService } from '../../../shared/services/global.service';

@Component({
  selector: 'app-cat-slider',
  standalone: true,
  imports: [SwiperComponent, SwiperModule, RouterLink],
  templateUrl: './cat-slider.component.html',
  styleUrl: './cat-slider.component.scss',
})
export class CatSliderComponent implements OnInit, OnChanges {
  screenWidth!: number;
  slidesPerView: number = 12;
  navigation: boolean = false;
  config: SwiperOptions = {
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
  lang!: string;
  // __________________________________________________
  categories: any[] = [];

  // __________________________________________________

  constructor(
    private cdRef: ChangeDetectorRef,
    private sendReq: SendReqService,
    private glSer: GlobalService
  ) {
    this.glSer.$langObs.subscribe((val) => (this.lang = val));
  }

  // _______________________________

  ngOnChanges(changes: SimpleChanges): void {
    this.cdRef.detectChanges();
  }
  ngOnInit(): void {
    this.getScreenWindow();

    // get all categories
    this.getAllCats();
  }

  @HostListener('window:resize', ['$event'])
  getScreenWindow() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 480) {
      this.slidesPerView = 4;
    } else if (this.screenWidth >= 481 && this.screenWidth <= 550) {
      this.slidesPerView = 5;
    } else if (this.screenWidth >= 551 && this.screenWidth <= 750) {
      this.slidesPerView = 6;
    } else if (this.screenWidth >= 751 && this.screenWidth <= 991) {
      this.slidesPerView = 8;
    } else if (this.screenWidth >= 992 && this.screenWidth <= 1400) {
      this.slidesPerView = 10;
    } else {
      this.slidesPerView = 14;
    }
  }

  // __________________________________________________

  getAllCats() {
    let url: string = 'categories';
    this.sendReq.get(url).subscribe({
      next: (res) => {
        this.categories = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
