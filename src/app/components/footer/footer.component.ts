import { AfterViewChecked, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalService } from '../../shared/services/global.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements AfterViewChecked {
  lang!: string;

  constructor(private glSer: GlobalService) {
    this.glSer.$langObs.subscribe((val) => (this.lang = val));
  }

  ngAfterViewChecked(): void {
    this.glSer.$langObs.subscribe((val) => (this.lang = val));
  }
}
