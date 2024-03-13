import { Component } from '@angular/core';
import { GlobalService } from '../../shared/services/global.service';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { PageSectionComponent } from '../shared/page-section/page-section.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [LoadingComponent, PageSectionComponent, CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  lang!: string;

  // __________________________________________

  constructor(private glSer: GlobalService) {
    this.glSer.$langObs.subscribe((val) => (this.lang = val));
  }

  // __________________________________________
}
