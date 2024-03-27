import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
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
  selector: 'app-page-section',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    PaginatorModule,
    RouterLink,
    CardComponent,
  ],
  templateUrl: './page-section.component.html',
  styleUrl: './page-section.component.scss',
})
export class PageSectionComponent implements OnInit {
  @Input() serivces: any[] = [];
  @Input() title: string = '';
  @Input() head: string = '';
  @Input() providerName: string = '';
  @Input() providerNameAr: string = '';
  // ___________________________________________________________

  showServices: any[] = [];
  first: number = 0;
  rows: number = 5;
  page: number = 1;
  pageCount: number = 0;
  lang: string = 'ar';
  // ___________________________________________________________

  constructor(private glSer: GlobalService) {
    this.glSer.$langObs.subscribe((val) => (this.lang = val));
  }

  ngOnInit(): void {
    this.showServices = this.serivces.slice(0, 5);
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
