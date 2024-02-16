import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

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
  const password: string = control.value;
  // Check if the password contains at least 8 characters, 1 digit, and 1 symbol
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password)
    ? null
    : {
        error:
          'Passwords must contain atleast 8 characters, 1 digit, 1 symbol, 1 lowercase and 1 uppercase character.',
      };
};

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  constructor(private _form: FormBuilder, private dialog: MatDialog) {}

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
    paymentTier: new FormControl<PaymentTiers | null>(null, [
      Validators.required,
    ]),
    acceptedTerms: new FormControl(false, [Validators.required]),
  });

  ratingsForm = this._form.array([]);

  ngOnInit() {
    this.setMaxRating(5);
  }

  setMaxRating(limit: number) {
    this.ratingsForm.clear();
    for (let i = 1; i <= limit; i++) {
      this.ratingsForm.push(new FormControl(i));
    }
  }

  get possibleRatings() {
    return this.ratingsForm.controls as FormControl[];
  }

  logForm() {
    console.log(this.registrationForm);
  }

  getError(controlName: string) {
    const control = this.registrationForm.get(controlName);
    return control?.errors?.['error'] || 'Unknown Error';
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: this.registrationForm.getRawValue(),
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result === 'save') {
        console.log('Form submitted');
        this.registrationForm.reset();
      } else {
        console.log('Form submit cancelled');
      }
    });
  }
}
