import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
    FormsModule,
    TranslateModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  lang!: string;
  // _______________________________________________
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      user_name: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      remmber_me: [false, Validators.required],
    });

    if (typeof localStorage != 'undefined') {
      this.lang = localStorage.getItem('lang') || 'ar';
    }
  }
  // _______________________________________________
  login() {
    console.log(this.loginForm.value);
  }
}
