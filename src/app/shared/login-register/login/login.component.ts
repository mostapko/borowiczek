import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from "rxjs";
import {AuthenticationService} from "../../../logic/services/authentication.service";
import {StorageService} from "../../../logic/services/storage.service";
import {Router} from "@angular/router";
import { LocalizeRouterService } from "@gilsdav/ngx-translate-router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() public showLoginRegister = new EventEmitter;
  public loginForm: any;
  private loginSub: Subscription | undefined;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private storageService: StorageService,
              private router: Router,
              private localizeService: LocalizeRouterService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  public login() {
    const credentials = this.loginForm.value;

    this.loginSub = this.authenticationService.login(credentials.email, credentials.password).subscribe({
      next: (resp) => {
        this.loginForm.reset();
        this.authenticationService.persistUser(resp);

        // const attemptedRoute = this.storageService.getItem('attemptedRoute');
        // this.storageService.removeItem('attemptedRoute');
        let route: any = this.localizeService.translateRoute('/home');
        this.router.navigate([route]);
      },
      error: (err) => {
        alert('Błąd logowania');
      }
    });
  }

  public openLoginRegister(): void {
    this.showLoginRegister.emit(true);
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
