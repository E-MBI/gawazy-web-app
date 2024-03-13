import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  userData = new BehaviorSubject<any>(null);
  user$ = this.userData.asObservable();

  //____________________________________
  constructor() {}
  //____________________________________

  upUserData(userInfo: any) {
    this.userData.next(userInfo);
  }
}
