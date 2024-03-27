import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalService } from '../../../shared/services/global.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { FavCardComponent } from '../shared/fav-card/fav-card.component';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    RouterLink,
    RouterModule,
    FavCardComponent,
    PaginatorModule,
  ],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss',
})
export class FavoriteComponent implements OnInit {
  lang!: string;
  checkAllSer: boolean = false;
  checkAllOffer: boolean = false;
  serivces: any[] = [
    {
      id: 12,
      name: 'أنتيكا-Antika',
      category: 'دعوات زفاف',
      city: 'كفر الشيخ',
      currency: 'L.E',
      currency_ar: 'جنيه',
      views: 235,
      like: 455,
      disLike: 20,
      share: 350,
      startPrice: 10,
      discount: 18,
      period: 'منذ سنة',
      endPrice: 30,
      image: '/assets/images/home/p1.jpeg',
      rate: 5,
    },
    {
      id: 98,
      name: ' 2 أنتيكا-Antika',
      category: 'دعوات زفاف',
      city: 'كفر الشيخ',
      currency: 'L.E',
      currency_ar: 'جنيه',
      views: 235,
      like: 455,
      disLike: 20,
      share: 350,
      startPrice: 10,
      // discount: 18,
      // period: 'منذ سنة',
      endPrice: 30,
      rate: 4,
    },
    {
      id: 122,
      name: 'أنتيكا-Antika',
      category: 'دعوات زفاف',
      city: 'كفر الشيخ',
      currency: 'L.E',
      currency_ar: 'جنيه',
      views: 235,
      like: 455,
      disLike: 20,
      share: 350,
      startPrice: 10,
      discount: 18,
      period: 'منذ سنة',
      endPrice: 30,
      rate: 3,
    },
    {
      id: 122,
      name: 'أنتيكا-Antika',
      category: 'دعوات زفاف',
      city: 'كفر الشيخ',
      currency: 'L.E',
      currency_ar: 'جنيه',
      views: 235,
      like: 455,
      disLike: 20,
      share: 350,
      startPrice: 10,
      discount: 18,
      period: 'منذ سنة',
      image: '/assets/images/home/p2.jpg',
      endPrice: 30,
      rate: 1,
    },
    {
      id: 122,
      name: 'أنتيكا-Antika',
      category: 'دعوات زفاف',
      city: 'كفر الشيخ',
      currency: 'L.E',
      currency_ar: 'جنيه',
      views: 235,
      like: 455,
      disLike: 20,
      share: 350,
      startPrice: 10,
      discount: 18,
      period: 'منذ سنة',
      endPrice: 30,
      rate: 4,
    },
    {
      id: 122,
      name: 'أنتيكا-Antika',
      category: 'دعوات زفاف',
      city: 'كفر الشيخ',
      currency: 'L.E',
      currency_ar: 'جنيه',
      views: 235,
      like: 455,
      disLike: 20,
      share: 350,
      startPrice: 10,
      discount: 18,
      period: 'منذ سنة',
      endPrice: 30,
      rate: 2,
    },
    {
      id: 122,
      name: 'أنتيكا-Antika',
      category: 'دعوات زفاف',
      city: 'كفر الشيخ',
      currency: 'L.E',
      currency_ar: 'جنيه',
      views: 235,
      like: 455,
      disLike: 20,
      share: 350,
      startPrice: 10,
      discount: 18,
      period: 'منذ سنة',
      endPrice: 30,
      rate: 4,
    },
    {
      id: 122,
      name: 'أنتيكا-Antika',
      category: ' دعوات زفاف',
      city: 'كفر الشيخ',
      currency: 'L.E',
      currency_ar: 'جنيه',
      views: 235,
      like: 455,
      disLike: 20,
      share: 350,
      startPrice: 10,
      discount: 18,
      period: 'منذ سنة',
      endPrice: 30,
      rate: 5,
    },
    {
      id: 122,
      name: 'أنتيكا-Antika',
      category: 'دعوات زفاف',
      city: 'كفر الشيخ',
      currency: 'L.E',
      currency_ar: 'جنيه',
      views: 235,
      like: 455,
      disLike: 20,
      share: 350,
      startPrice: 10,
      discount: 18,
      period: 'منذ سنة',
      endPrice: 30,
      rate: 3,
    },
    {
      id: 122,
      name: 'أنتيكا-Antika',
      category: 'دعوات زفاف',
      city: 'كفر الشيخ',
      currency: 'L.E',
      currency_ar: 'جنيه',
      views: 235,
      like: 455,
      disLike: 20,
      share: 350,
      startPrice: 10,
      discount: 18,
      period: 'منذ سنة',
      endPrice: 30,
      rate: 4,
    },
  ];
  offers: any[] = [
    {
      id: 12,
      name: 'أنتيكا-Antika',
      category: 'دعوات زفاف',
      city: 'كفر الشيخ',
      currency: 'L.E',
      currency_ar: 'جنيه',
      views: 235,
      like: 455,
      disLike: 20,
      share: 350,
      startPrice: 10,
      discount: 18,
      period: 'منذ سنة',
      endPrice: 30,
      image: '/assets/images/home/p1.jpeg',
      rate: 5,
    },
    {
      id: 98,
      name: ' 2 أنتيكا-Antika',
      category: 'دعوات زفاف',
      city: 'كفر الشيخ',
      currency: 'L.E',
      currency_ar: 'جنيه',
      views: 235,
      like: 455,
      disLike: 20,
      share: 350,
      startPrice: 10,
      // discount: 18,
      // period: 'منذ سنة',
      endPrice: 30,
      rate: 4,
    },
    {
      id: 122,
      name: 'أنتيكا-Antika',
      category: 'دعوات زفاف',
      city: 'كفر الشيخ',
      currency: 'L.E',
      currency_ar: 'جنيه',
      views: 235,
      like: 455,
      disLike: 20,
      share: 350,
      startPrice: 10,
      discount: 18,
      period: 'منذ سنة',
      endPrice: 30,
      rate: 3,
    },
    {
      id: 122,
      name: 'أنتيكا-Antika',
      category: 'دعوات زفاف',
      city: 'كفر الشيخ',
      currency: 'L.E',
      currency_ar: 'جنيه',
      views: 235,
      like: 455,
      disLike: 20,
      share: 350,
      startPrice: 10,
      discount: 18,
      period: 'منذ سنة',
      image: '/assets/images/home/p2.jpg',
      endPrice: 30,
      rate: 1,
    },
    {
      id: 122,
      name: 'أنتيكا-Antika',
      category: 'دعوات زفاف',
      city: 'كفر الشيخ',
      currency: 'L.E',
      currency_ar: 'جنيه',
      views: 235,
      like: 455,
      disLike: 20,
      share: 350,
      startPrice: 10,
      discount: 18,
      period: 'منذ سنة',
      endPrice: 30,
      rate: 4,
    },
    {
      id: 122,
      name: 'أنتيكا-Antika',
      category: 'دعوات زفاف',
      city: 'كفر الشيخ',
      currency: 'L.E',
      currency_ar: 'جنيه',
      views: 235,
      like: 455,
      disLike: 20,
      share: 350,
      startPrice: 10,
      discount: 18,
      period: 'منذ سنة',
      endPrice: 30,
      rate: 2,
    },
    {
      id: 122,
      name: 'أنتيكا-Antika',
      category: 'دعوات زفاف',
      city: 'كفر الشيخ',
      currency: 'L.E',
      currency_ar: 'جنيه',
      views: 235,
      like: 455,
      disLike: 20,
      share: 350,
      startPrice: 10,
      discount: 18,
      image: '/assets/images/vendor-dash/102.jpg',
      period: 'منذ سنة',
      endPrice: 30,
      rate: 4,
    },
    {
      id: 122,
      name: 'أنتيكا-Antika',
      category: ' دعوات زفاف',
      city: 'كفر الشيخ',
      currency: 'L.E',
      currency_ar: 'جنيه',
      views: 235,
      like: 455,
      disLike: 20,
      share: 350,
      startPrice: 10,
      discount: 18,
      period: 'منذ سنة',
      endPrice: 30,
      rate: 5,
    },
    {
      id: 122,
      name: 'أنتيكا-Antika',
      category: 'دعوات زفاف',
      city: 'كفر الشيخ',
      currency: 'L.E',
      currency_ar: 'جنيه',
      views: 235,
      like: 455,
      disLike: 20,
      share: 350,
      startPrice: 10,
      discount: 18,
      image: '/assets/images/vendor-dash/104.jpg',
      period: 'منذ سنة',
      endPrice: 30,
      rate: 3,
    },
    {
      id: 122,
      name: 'أنتيكا-Antika',
      category: 'دعوات زفاف',
      city: 'كفر الشيخ',
      currency: 'L.E',
      currency_ar: 'جنيه',
      views: 235,
      like: 455,
      disLike: 20,
      share: 350,
      startPrice: 10,
      discount: 18,
      period: 'منذ سنة',
      endPrice: 30,
      rate: 4,
    },
  ];

  showServices: any[] = [];
  showOffers: any[] = [];
  first: number = 0;
  rows: number = 4;
  page: number = 1;
  pageCount: number = 0;
  // _________________________________________________

  constructor(private gSer: GlobalService) {
    this.gSer.$langObs.subscribe((val) => (this.lang = val));
  }
  // _________________________________________________

  checkAllSerSt() {
    this.checkAllSer = !this.checkAllSer;
  }

  checkAllOfferSt() {
    this.checkAllOffer = !this.checkAllOffer;
  }

  // ___________________________________________________________

  ngOnInit(): void {
    this.showServices = this.serivces.slice(0, 4);
    this.showOffers = this.offers.slice(0, 4);
    this.pageCount = Math.ceil(this.serivces.length / this.rows);
  }

  // ______________________other Methods________________________
  // ___________________________________________________________

  navigationServices(event: Event | any) {
    this.first = event.first;
    this.rows = event.rows;
    this.page = event.page + 1;
    this.pageCount = event.pageCount;

    this.showServices = this.serivces.slice(
      event.first,
      event.first + this.rows
    );
  }

  navigationOffers(event: Event | any) {
    this.first = event.first;
    this.rows = event.rows;
    this.page = event.page + 1;
    this.pageCount = event.pageCount;

    this.showOffers = this.offers.slice(event.first, event.first + this.rows);
  }
}
