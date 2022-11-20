import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { StorageService } from './storage.service';
import {Router} from "@angular/router";

interface AuthResponse {
  jwt: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url = `${environment.apiUrl}/auth/local`;
  private loginTracker = new BehaviorSubject(this.checkIfLoggedIn());

  loggedInStatus$ = this.loginTracker.asObservable();

  constructor(private http: HttpClient, private storageService: StorageService, private router: Router) { }

  login(identifier: string, password: string) {
    return this.http.post<AuthResponse>(this.url, { "identifier": identifier, "password": password });
  }

  register(username: string, email: string, password: string) {
    return this.http.post<AuthResponse>(`${this.url}/register`, { username, email, password });
  }

  checkIfLoggedIn() {
    return this.storageService.getItem('loggedIn') === 'true';
  }

  persistUser(resp: AuthResponse) {
    [
      ['userId', resp.user.id],
      ['userEmail', resp.user.email],
      ['username', resp.user.username],
      ['loggedIn', 'true'],
      ['token', resp.jwt]
    ].forEach(item => this.storageService.setItem(item[0], item[1]));
    this.loginTracker.next(true);
  }

  getPersistedUser(): User {
    return {
      id: this.storageService.getItem('userId') || '',
      username: this.storageService.getItem('username') || '',
      email: this.storageService.getItem('userEmail') || ''
    };
  }

  getPersistedToken(): string {
    return this.storageService.getItem('token') || '';
  }

  logout() {
    ['userId', 'userEmail', 'username', 'loggedIn', 'token'].forEach(item => this.storageService.removeItem(item));
    this.loginTracker.next(false);
    this.router.navigate(['/']);
  }

  getAuthHeader() {
    return {
      headers: { 'Authorization': `Bearer ${this.getPersistedToken()}` }
    };
  };
}
