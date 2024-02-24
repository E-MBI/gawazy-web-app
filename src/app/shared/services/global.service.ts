import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  currentLang = new BehaviorSubject<string>('ar');
  $langObs = this.currentLang.asObservable();

  loginPage = new BehaviorSubject<boolean>(false);
  $loginPage = this.loginPage.asObservable();
  // ____________________________________________

  constructor() {}

  // ____________________________________________

  changeLang(lang: string) {
    this.currentLang.next(lang);
  }

  loggedSt(st: boolean) {
    this.loginPage.next(st);
  }
}
