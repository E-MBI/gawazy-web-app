import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PaginatorModule } from 'primeng/paginator';
import { CardComponent } from '../../shared/card/card.component';
import { RouterLink } from '@angular/router';
import { GlobalService } from '../../../shared/services/global.service';
interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
@Component({
  selector: 'app-servs-comp',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    PaginatorModule,
    RouterLink,
    CardComponent,
  ],
  templateUrl: './servs-comp.component.html',
  styleUrl: './servs-comp.component.scss',
})
export class ServsCompComponent implements OnInit {
  serivces: any[] = [
    {
      id: 12,
      name: 'أنتيكا-Antika',
      category: 'دعوات زفاف',
      city: 'كفر الشيخ',
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
  first: number = 0;
  rows: number = 5;
  page: number = 1;
  pageCount: number = 0;
  lang!: string;
  // ___________________________________________________________

  constructor(private glSer: GlobalService) {
    this.glSer.$langObs.subscribe((val) => (this.lang = val));
  }

  ngOnInit(): void {
    this.showServices = this.serivces.slice(0, 5);
    this.pageCount = Math.ceil(this.serivces.length / this.rows);
  }

  // ______________________other Methods________________________
  // ___________________________________________________________

  onPageChange(event: PageEvent | any) {
    this.first = event.first;
    this.rows = event.rows;
    this.showServices = this.serivces.slice(
      event.first,
      event.first + this.rows
    );
    this.page = event.page + 1;
    this.pageCount = event.pageCount;
  }
}
