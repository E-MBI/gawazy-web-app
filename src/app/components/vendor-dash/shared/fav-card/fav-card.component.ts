import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalService } from '../../../../shared/services/global.service';

@Component({
  selector: 'app-fav-card',
  standalone: true,
  imports: [TranslateModule, RouterModule, CommonModule],
  templateUrl: './fav-card.component.html',
  styleUrl: './fav-card.component.scss',
})
export class FavCardComponent implements OnChanges {
  @Input('item') item: any;
  @Input() routeUrl: string | number = '';
  @Input() oldPrice: boolean = false;
  activeSt!: any;
  notActiveSt!: any;
  lang!: string;

  // ________________________________________________
  constructor(private glSer: GlobalService) {
    this.glSer.$langObs.subscribe((val) => (this.lang = val));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.item = changes['item'].currentValue;
      this.activeSt = Array.from({ length: this.item.rate }).fill(null);
      this.notActiveSt = Array.from({ length: 5 - this.item.rate }).fill(null);
    }
  }
  // ________________________________________________

  addToFav(itemId: any) {
    console.log(itemId);
  }
}
