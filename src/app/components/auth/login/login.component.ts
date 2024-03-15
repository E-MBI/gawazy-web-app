import { CommonModule, Location } from '@angular/common';
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
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
    FormsModule,
    TranslateModule,
    ToastModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  // _________________________________________
  constructor(private location: Location) {}

  ngOnInit(): void {}
  // _________________________________________
  goBack() {
    this.location.back();
  }
}
