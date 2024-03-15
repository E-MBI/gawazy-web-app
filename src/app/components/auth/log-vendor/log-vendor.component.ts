import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ToastModule } from 'primeng/toast';
import { UserDataService } from '../../../shared/services/user-data.service';
import { SendReqService } from '../../../shared/services/send-req.service';
import { ToastMessageService } from '../../../shared/services/toast-message.service';

@Component({
  selector: 'app-log-vendor',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
    FormsModule,
    TranslateModule,
    ToastModule,
  ],

  templateUrl: './log-vendor.component.html',
  styleUrl: './log-vendor.component.scss',
})
export class LogVendorComponent implements OnInit {
  loginForm: FormGroup;
  lang!: string;
  showPass: boolean = false;
  curtUser: any;
  // _______________________________________________
  constructor(
    private fb: FormBuilder,
    private userData: UserDataService,
    private router: Router,
    private sendReq: SendReqService,
    private toast: ToastMessageService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      remmber_me: [false, Validators.required],
    });

    if (typeof localStorage != 'undefined') {
      this.lang = localStorage.getItem('lang') || 'ar';
    }
  }

  ngOnInit(): void {}
  // _______________________________________________

  showPassSt() {
    this.showPass = !this.showPass;
  }

  login() {
    let url: string = 'auth/login';
    let data = this.loginForm.value;
    data.type = 1;
    // _________________________

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
          this.router.navigateByUrl('/vendor-dashoard');
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
