import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ValidatorFn,
  Validators,
} from '@angular/forms';

type PaymentTiers = 'basic' | 'standard' | 'premium';

export interface Registration {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  paymentTier: PaymentTiers;
  acceptedTerms: boolean;
}

const onlyLowercaseNoSymbols: ValidatorFn = (control: AbstractControl) => {
  const value = control.value;
  const regex = /^[a-z]+$/;
  return regex.test(value)
    ? null
    : {
        error:
          'Username must be only lowercase and must not contain any symbols',
      };
};

const confirmEmail: ValidatorFn = (control: AbstractControl) => {
  const email = control.root.get('email')?.value;
  const confirmEmail = control.value;

  return email === confirmEmail ? null : { error: 'Email does not match' };
};

const validPassword: ValidatorFn = (control: AbstractControl) => {
  const password = control.value;
  // check if the password contains 8 characters, 1 digit, 1 number and 1 symbol
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;
  return regex.test(password)
    ? null
    : {
        error:
          'Password must contain at least 8 characters, 1 digit, 1 number and 1 symbol',
      };
};

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  constructor(private _form: FormBuilder) {}

  registrationForm = this._form.group({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    username: new FormControl('', [
      Validators.required,
      onlyLowercaseNoSymbols,
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    confirmEmail: new FormControl('', [Validators.required, confirmEmail]),
    password: new FormControl('', [Validators.required, validPassword]),
    paymentTier: new FormControl<PaymentTiers | null>(null),
    acceptedTerms: new FormControl(false, [Validators.required]),
  });

  logForm() {
    console.log(this.registrationForm);
  }

  getError(controlName: string) {
    const control = this.registrationForm.get(controlName);
    return control?.errors?.['error'] || 'Unknown Error';
  }
}
