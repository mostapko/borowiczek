import { Injectable } from '@angular/core';
import { Observable, from } from "rxjs";
import { environment } from "../../../environments/environment";
import { Client, Account, ID } from 'appwrite';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private client: Client = new Client();
  private account: Account = new Account(this.client);

  constructor() {
    this.client.setEndpoint(environment.apiUrl)
      .setProject(environment.apiProjectId);
  }

  public loginUser(identifier: string,  password: string): Observable<any> {
    return from(this.account.createEmailSession(identifier, password));
  }

  public registerUser(username: string, email: string, password: string): Observable<any> {
    return from(this.account.create(ID.unique(), email, password, username));
  }

  public loginUserInfo(): Observable<any> {
    return from(this.account.get());
  }

}
