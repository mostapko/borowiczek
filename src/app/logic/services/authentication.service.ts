import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  public loginUser(identifier: string, password: string): Observable<any> {
    let url = environment.apiUrl + '/auth/local'
    return this.http.post<any>(url, { "identifier": identifier, "password": password });
  }

  public registerUser(username: string, email: string, password: string): Observable<any> {
    let url = environment.apiUrl + '/auth/local'
    return this.http.post<any>(url + '/register', { username, email, password });

  }

}
