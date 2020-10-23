import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/lib/base-component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  public registerForm: FormGroup;
  public loginForm: FormGroup;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.minLength(6),
        Validators.required,
      ]),
      remember: new FormControl(false, []),
    });
  }
  onSubmitLogin(value: any) {}
  onSubmitRegister(value: any) {
    this._api
      .post('api/customer/create-item', {
        customer_email: value.email,
        customer_password: value.password,
      })
      .takeUntil(this.unsubscribe)
      .subscribe(
        (res) => {
          alert('Success');
        },
        (err) => {}
      );
  }
}
