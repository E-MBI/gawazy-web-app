import { CommonModule } from '@angular/common';
import {
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
import { RouterLink, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';
import { GlobalService } from '../../../../shared/services/global.service';
import { SendReqService } from '../../../../shared/services/send-req.service';
import { UserDataService } from '../../../../shared/services/user-data.service';

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
  selector: 'app-add-sub-ser',
  standalone: true,
  imports: [
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterModule,
    CommonModule,
    DropdownModule,
  ],
  templateUrl: './add-sub-ser.component.html',
  styleUrl: './add-sub-ser.component.scss',
})
export class AddSubSerComponent implements OnInit, AfterViewInit {
  subSerForm: FormGroup;
  pricingForm: FormGroup;
  profile_image!: File;
  big_image!: File;
  lang!: string;
  allGovernments: IGoverments[] = [];
  allCities: ICities[] = [];
  opition: number = 1;
  // ___________________________________
  constructor(
    private fb: FormBuilder,
    private gSer: GlobalService,
    private sendReq: SendReqService,
    private cdRef: ChangeDetectorRef,
    private accSer: UserDataService
  ) {
    this.subSerForm = this.fb.group({
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
    return this.subSerForm.get('government_id');
  }
  get city_id() {
    return this.subSerForm.get('city_id');
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

  upServiceData() {
    let data = this.subSerForm.value;
    data.government_id = this.government_id?.value?.id;
    data.city_id = this.city_id?.value?.id;
    // _______________________________________
  }
}
