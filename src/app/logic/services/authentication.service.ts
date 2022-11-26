import { Injectable } from '@angular/core';
import { Observable, from } from "rxjs";
import { environment } from "../../../environments/environment";
import { Client, Account, ID } from 'appwrite';
import { createClient } from '@supabase/supabase-js'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private client: Client = new Client();
  private supabase = createClient(environment.supabaseUrl, environment.supabaseKey)

  constructor() {
    this.client.setEndpoint(environment.apiUrl)
      .setProject(environment.apiProjectId);
  }

  public loginUser(identifier: string,  password: string): Observable<any> {
    return from(this.supabase.auth.signInWithPassword({
      email: identifier,
      password: password,
    }));
  }

  public registerUser(username: string, email: string, password: string): Observable<any> {
    return from(this.supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          username: username
        }
      }
    }))
  }

  public logoutUser(): Observable<any> {
    return from(this.supabase.auth.signOut());
  }

  public loginUserInfo(): Observable<any> {
    return from(this.supabase.auth.getUser());
  }

  public getUserOwnFollowing(userId: string): Observable<any> {
    return from(this.supabase.from('profiles').select('following').eq('id', userId));
  }

}
