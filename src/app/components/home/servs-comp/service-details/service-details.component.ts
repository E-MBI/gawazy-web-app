import { Component, OnInit } from '@angular/core';
import { LoadingComponent } from '../../../../shared/loading/loading.component';
import { PageSectionComponent } from '../../../shared/page-section/page-section.component';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalService } from '../../../../shared/services/global.service';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [
    LoadingComponent,
    PageSectionComponent,
    CommonModule,
    TranslateModule,
    PaginatorModule,
  ],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss',
})
export class ServiceDetailsComponent implements OnInit {
  lang: string = 'ar';
  showServices: any[] = [];
  serivces: any[] = [
    {
      id: 1,
      service_name: 'one',
      image: '/assets/images/home/p1.jpeg',
    },
    {
      id: 2,
      service_name: 'two',
      image: '/assets/images/home/p2.jpg',
    },
    {
      id: 3,
      service_name: 'three',
      image: '/assets/images/home/placeholder.jpg',
    },
    {
      id: 4,
      service_name: 'one',
      image: '/assets/images/home/p2.jpg',
    },
    {
      id: 1,
      service_name: 'one',
      image: '/assets/images/home/p1.jpeg',
    },
    {
      id: 2,
      service_name: 'two',
      image: '/assets/images/home/placeholder.jpg',
    },
    {
      id: 3,
      service_name: 'three',
      image: '/assets/images/home/placeholder.jpg',
    },
    {
      id: 4,
      service_name: 'one',
      image: '/assets/images/home/p2.jpg',
    },
  ];
  first: number = 0;
  rows: number = 4;
  page: number = 1;
  pageCount: number = 0;
  // ____________________________________

  constructor(private glSer: GlobalService) {
    window.scrollTo(0, 0);
    this.glSer.$langObs.subscribe((val) => (this.lang = val));
  }

  // ____________________________________

  ngOnInit(): void {
    this.showServices = this.serivces.slice(0, 4);
    this.pageCount = Math.ceil(this.serivces.length / this.rows);
  }

  // ______________________Other Methods________________________
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
