import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthenticationDataService } from "../services/authentication-data.service";
import { LocalizeRouterService } from "@gilsdav/ngx-translate-router";

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  constructor(private authenticationDataService: AuthenticationDataService,
              private router: Router,
              private localizeService: LocalizeRouterService) { }

  canActivate(): Observable<boolean> {
    return this.authenticationDataService.getIsUserLoggedIn()
      .pipe(map(isLoggedIn => {
        if (!isLoggedIn) {
          let route = this.localizeService.translateRoute('/start')
          this.router.navigate([route]);
        }
        return isLoggedIn;
      }))
  }
}
