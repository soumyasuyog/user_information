import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_BASE_URL = environment.urlAddress;

  constructor(private http: HttpClient) { }

  getUserinfo(): Observable<any> {
    return this.http.get(this.API_BASE_URL + 'users');
  }
}
