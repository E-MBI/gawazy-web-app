import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe, Location } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { Icategories } from '../../../interfaces/categories';
import { SendReqService } from '../../../shared/services/send-req.service';
import { UserDataService } from '../../../shared/services/user-data.service';
import { ToastMessageService } from '../../../shared/services/toast-message.service';
import { ToastModule } from 'primeng/toast';
import { Router } from '@angular/router';
interface IvendorData {
  first_name: string;
  last_name: string;
  vendor_name: string;
  category_id: string;
  phone_number: string;
  email: string;
  password: string;
  password_confirmation: string;
}

@Component({
  selector: 'app-sign-vendor',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    ReactiveFormsModule,
    CalendarModule,
    FormsModule,
    DropdownModule,
    ToastModule,
  ],
  templateUrl: './sign-vendor.component.html',
  styleUrl: './sign-vendor.component.scss',
  providers: [DatePipe],
})
export class SignVendorComponent implements OnInit {
  registerForm: FormGroup;
  lang!: string;
  birthDate!: string | number;
  year?: string = '';
  month?: string = '';
  day?: string = '';
  finalBirthDate: string = '';
  genderVal: string = '';
  showPassSt: any = {
    pass: false,
    confirmPass: false,
  };
  allCategories: Icategories[] = [];
  // _______________________________________________
  constructor(
    private fb: FormBuilder,
    private location: Location,
    private date: DatePipe,
    private sendReq: SendReqService,
    private userData: UserDataService,
    private toast: ToastMessageService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(4)]],
      last_name: ['', [Validators.required, Validators.minLength(4)]],
      vendor_name: ['', [Validators.required, Validators.minLength(4)]],
      category_id: ['', Validators.required],
      phone_number: ['', [Validators.required, Validators.minLength(4)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: [
        '',
        [Validators.required, Validators.minLength(8)],
      ],
    });

    if (typeof localStorage != 'undefined') {
      this.lang = localStorage.getItem('lang') || 'ar';
    }
  }

  // _______________________________________________
  get first_name() {
    return this.registerForm.get('first_name');
  }
  get last_name() {
    return this.registerForm.get('last_name');
  }
  get vendor_name() {
    return this.registerForm.get('vendor_name');
  }
  get category_id() {
    return this.registerForm.get('category_id');
  }

  get phone_number() {
    return this.registerForm.get('phone_number');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get password_confirmation() {
    return this.registerForm.get('password_confirmation');
  }

  // _______________________________________________

  ngOnInit(): void {
    this.getAllcategories();
  }

  // _______________________________________________

  goBack() {
    this.location.back();
  }

  getAllcategories() {
    let url = `categories?page=${1}`;
    this.sendReq.get(url).subscribe({
      next: (res) => {
        this.allCategories = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getDate(date: Date): string | null {
    return this.date.transform(date, 'yyyy-M-d');
  }

  showPass(name: string, st: boolean) {
    if (name == 'pass') {
      this.showPassSt[`${name}`] = st;
    } else {
      this.showPassSt[`${name}`] = st;
    }
  }

  register() {
    let url: string = 'auth/register_vendor';
    let data: IvendorData = this.registerForm.value;
    data.category_id = this.category_id?.value.id + '';

    // _____________________________________
    this.sendReq.post(url, data).subscribe({
      next: (res) => {
        this.userData.upUserData(res.data);

        this.toast.showToast(
          'custom',
          'Success',
          'Register has been sucessfully',
          'pi-thumbs-up'
        );

        setTimeout(() => {
          this.router.navigateByUrl('/log-vendor');
        }, 2000);
      },

      error: (err) => {
        this.toast.showToast(
          'error',
          'Error',
          err.error.error,
          'pi-thumbs-down'
        );
        console.log(err);
      },
    });
  }
}
