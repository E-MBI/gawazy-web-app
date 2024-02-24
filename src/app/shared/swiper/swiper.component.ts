import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { SwiperModule } from 'swiper/angular';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  standalone: true,
  imports: [SwiperModule],
})
export class SwiperComponent implements OnInit, OnChanges {
  @Input() config!: any;
  @Input() slidesPerView!: number;
  @Input() navigation!: boolean;
  // _______________________________________
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.cdr.detectChanges();
  }
  ngOnInit(): void {}
}
