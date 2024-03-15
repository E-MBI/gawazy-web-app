import { CommonModule, DatePipe, Location } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CalendarModule } from 'primeng/calendar';
import { SendReqService } from '../../../shared/services/send-req.service';
import { ToastModule } from 'primeng/toast';
import { UserDataService } from '../../../shared/services/user-data.service';

import { ToastMessageService } from '../../../shared/services/toast-message.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-user',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    ReactiveFormsModule,
    CalendarModule,
    FormsModule,
    ToastModule,
  ],
  templateUrl: './sign-user.component.html',
  styleUrl: './sign-user.component.scss',
  providers: [DatePipe],
})
export class SignUserComponent {
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
  // _______________________________________________
  constructor(
    private fb: FormBuilder,
    private location: Location,
    private date: DatePipe,
    private _sendReqSer: SendReqService,
    private userData: UserDataService,
    private router: Router,
    private toast: ToastMessageService
  ) {
    this.registerForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(4)]],
      last_name: ['', [Validators.required, Validators.minLength(4)]],
      phone_number: ['', [Validators.required, Validators.minLength(4)]],
      birth_date: [''],
      gender: ['', Validators.required],
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
  get phone_number() {
    return this.registerForm.get('phone_number');
  }
  get birth_date() {
    return this.registerForm.get('birth_date');
  }
  get gender() {
    return this.registerForm.get('gender');
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

  goBack() {
    this.location.back();
  }

  getDate(date: Date): string | null {
    return this.date.transform(date, 'yyyy-M-d');
  }

  printDate() {
    let date = this.getDate(this.birth_date?.value);
    this.finalBirthDate = date || '';
    this.year = date?.split('-')[0];
    this.month = date?.split('-')[1];
    this.day = date?.split('-')[2];
  }

  getGender(e: Event | any) {
    this.genderVal = e.target.value;
  }

  showPass(name: string, st: boolean) {
    if (name == 'pass') {
      this.showPassSt[`${name}`] = st;
    } else {
      this.showPassSt[`${name}`] = st;
    }
  }

  register() {
    let url: string = 'auth/register';
    // _____________handle data____________
    let data: any = this.registerForm.value;
    let user_name = `${this.first_name?.value}_${this.last_name?.value}`;
    data.user_name = user_name;
    data.birth_date = this.getDate(this.birth_date?.value);
    data.gender = this.genderVal;
    // ________________________________________
    this._sendReqSer.post(url, data).subscribe({
      next: (res) => {
        this.userData.upUserData(res.data);

        this.toast.showToast(
          'custom',
          'Success',
          'Register has been sucessfully',
          'pi-thumbs-up'
        );
        setTimeout(() => {
          this.router.navigateByUrl('/log-user');
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
