import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { env } from '../../utils/environment';

@Injectable({
  providedIn: 'root',
})
export class SendReqService {
  // __________________Props______________________
  apiV1 = env.apiUrl;
  // ________________________________________

  constructor(private http: HttpClient) {}

  // ________________________________________
  getHeaders(sendFile: boolean): HttpHeaders {
    if (!sendFile) {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + this.getToken(),
      });
    }

    return new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + this.getToken(),
    });
  }

  getToken(): string | null {
    let token: string | null = localStorage.getItem('token');
    return token;
  }

  // *________________________ Other Functions____________________
  // ?___get_____
  get(apiUrl: string): Observable<any> {
    return this.http.get(this.apiV1 + apiUrl);
  }

  // ?___post_____
  post(
    apiUrl: string,
    data: any = {},
    sendFile: boolean = false
  ): Observable<any> {
    if (!sendFile) {
      return this.http.post(this.apiV1 + apiUrl, data, {
        headers: this.getHeaders(sendFile),
      });
    }

    return this.http.post(this.apiV1 + apiUrl, data, {
      headers: this.getHeaders(sendFile),
    });
  }

  // ?___put_____
  put(
    apiUrl: string,
    data: any = {},
    sendFile: boolean = false
  ): Observable<any> {
    if (!sendFile) {
      return this.http.put(this.apiV1 + apiUrl, data, {
        headers: this.getHeaders(sendFile),
      });
    }

    return this.http.put(this.apiV1 + apiUrl, data, {
      headers: this.getHeaders(sendFile),
    });
  }

  // ?___delete_____
  delete(apiUrl: string, id: any): Observable<any> {
    return this.http.delete(`${this.apiV1 + apiUrl + id}`);
  }
}
