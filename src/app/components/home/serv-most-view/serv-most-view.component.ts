import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PaginatorModule } from 'primeng/paginator';
import { CardComponent } from '../../shared/card/card.component';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-serv-most-view',
  standalone: true,
  imports: [CommonModule, TranslateModule, PaginatorModule, CardComponent],
  templateUrl: './serv-most-view.component.html',
  styleUrl: './serv-most-view.component.scss',
})
export class ServMostViewComponent {
  services: any[] = [
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
  rows: number = 4;
  page: number = 1;
  pageCount: number = 0;
  // ___________________________________________________________

  constructor() {}

  ngOnInit(): void {
    this.showServices = this.services.slice(0, 4);
    this.pageCount = Math.ceil(this.services.length / this.rows);
  }

  // ______________________other Methods________________________
  // ___________________________________________________________

  onPageChange(event: PageEvent | any) {
    this.first = event.first;
    this.rows = event.rows;
    this.showServices = this.services.slice(
      event.first,
      event.first + this.rows
    );
    this.page = event.page + 1;
    this.pageCount = event.pageCount;
  }
}
