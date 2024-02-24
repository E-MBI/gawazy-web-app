import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnChanges {
  @Input('item') item: any;
  activeSt!: any;
  notActiveSt!: any;
  // ________________________________________________
  // ________________________________________________

  constructor() {}

  // ________________________________________________
  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.item = changes['item'].currentValue;
      this.activeSt = Array.from({ length: this.item.rate }).fill(null);
      this.notActiveSt = Array.from({ length: 5 - this.item.rate }).fill(null);
    }
  }

  addToFav(itemId: any) {
    console.log(itemId);
  }
}
