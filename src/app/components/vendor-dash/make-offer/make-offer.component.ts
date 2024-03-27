import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalService } from '../../../shared/services/global.service';
import { SendReqService } from '../../../shared/services/send-req.service';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { UserDataService } from '../../../shared/services/user-data.service';
import { log } from 'console';
interface IGoverments {
  id: number;
  name: string;
  ar_name: string;
}
interface ICities {
  id: number;
  name: string;
  ar_name: string;
}

@Component({
  selector: 'app-make-offer',
  standalone: true,
  imports: [
    TranslateModule,
    FormsModule,
    DropdownModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './make-offer.component.html',
  styleUrl: './make-offer.component.scss',
})
export class MakeOfferComponent implements OnInit, AfterViewInit {
  makeNewOffer: FormGroup;
  pricingForm: FormGroup;
  profile_image!: File;
  big_image!: File;
  lang!: string;
  allGovernments: IGoverments[] = [];
  allCities: ICities[] = [];
  opition: number = 1;
  discountPercent: string | number = '';
  insteadPrice: number = 0;
  offerCostPrice: number = 0;
  // ___________________________________
  constructor(
    private fb: FormBuilder,
    private gSer: GlobalService,
    private sendReq: SendReqService,
    private cdRef: ChangeDetectorRef,
    private accSer: UserDataService
  ) {
    this.makeNewOffer = this.fb.group({
      government_id: [''],
      city_id: [''],
      vendor_type: [''],
      whats_app: [''],
      contact_number: [''],
      contact_mail: [''],
      description: [''],
      banner_type: [''],
    });

    // ___________ pricing form ______________
    this.pricingForm = this.fb.group({
      service_coast: [''],
      price_from: [''],
      price_to: [''],
    });
    // price_from: [''],
    this.gSer.$langObs.subscribe((val) => (this.lang = val));
  }

  // ___________________________________
  ngOnInit(): void {
    this.getAllGovernments();
    this.accSer.user$.subscribe((val) => console.log(val));
  }

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  get government_id() {
    return this.makeNewOffer.get('government_id');
  }
  get city_id() {
    return this.makeNewOffer.get('city_id');
  }
  // ___________________________________
  getAllGovernments() {
    let url: string = 'governments';
    this.sendReq.get(url).subscribe({
      next: (res) => {
        this.allGovernments = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getCitiesForGovernment(e: Event | any) {
    this.getAllCities(e.value.id);
  }

  getAllCities(gov_id: number) {
    let url: string = 'governments/' + gov_id;
    this.sendReq.get(url).subscribe({
      next: (res) => {
        this.allCities = res.data.cities;
        console.log(this.allCities);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getOfferCost(e: Event | any) {
    this.offerCostPrice = e.target.value;
    if (this.offerCostPrice !== 0 && this.insteadPrice !== 0) {
      this.discountPercent = Math.abs(
        (this.offerCostPrice / this.insteadPrice) * 100
      );
    }
  }

  getInstedPrice(e: Event | any) {
    this.insteadPrice = e.target.value;
    if (this.offerCostPrice !== 0 && this.insteadPrice !== 0) {
      this.discountPercent = Math.abs(
        (this.offerCostPrice / this.insteadPrice) * 100
      );
    }
  }

  upServiceData() {
    let data = this.makeNewOffer.value;
    data.government_id = this.government_id?.value?.id;
    data.city_id = this.city_id?.value?.id;
    // _______________________________________
  }
}
