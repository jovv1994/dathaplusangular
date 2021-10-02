import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  url = 'https://test-dt.getsandbox.com/users';
  constructor(private http: HttpClient) {}

  users() {
    return this.http.get(this.url);
  }

  saveUser(data: any) {
    return this.http.post(this.url, data);
  }
}
