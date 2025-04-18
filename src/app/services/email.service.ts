import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailService {
  private url = 'https://advanceit.co/mail_test.php';
  constructor(private http: HttpClient) {}

  sendForm(data: any): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    Object.keys(data).forEach(key => body.set(key, data[key]));
    return this.http.post(this.url, body.toString(), { headers, responseType: 'text' });
  }
}
