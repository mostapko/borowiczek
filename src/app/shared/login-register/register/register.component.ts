import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../logic/services/authentication.service";
import {StorageService} from "../../../logic/services/storage.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() public showLoginRegister = new EventEmitter;
  public registerForm: any;
  private registrationSub: Subscription | undefined;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private storageService: StorageService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  public signup() {
    const user = this.registerForm.value;

    this.registrationSub = this.authenticationService.register(
      user.username,
      user.email,
      user.password
    ).subscribe({
      next: (resp) => {
        this.registerForm.reset();
        this.authenticationService.persistUser(resp);
        alert('Konto utworzone!');
        this.openLoginRegister();
      },
      error: (err) => {
        alert('Błąd rejestracji!');
      }
    });
  }

  public openLoginRegister(): void {
    this.showLoginRegister.emit(true);
  }

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }
}
