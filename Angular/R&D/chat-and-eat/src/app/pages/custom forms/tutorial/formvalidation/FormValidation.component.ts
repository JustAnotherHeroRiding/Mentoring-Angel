import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidatorFn,
  Validators,
} from '@angular/forms';

const containsNumber: ValidatorFn = (control: AbstractControl) => {
  const regex = /(?=.*[0-9])(?=.*[a-z])/;

  if (control.value && regex.test(control.value)) {
    return null;
  }
  return {
    message: 'The string must contain at least one number and one letter.',
  };
};

@Component({
  selector: 'app-formvalidion',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.scss'],
})
export class FormValidationComponent implements OnInit {
  username = new FormControl('username', [Validators.required, containsNumber]);
  constructor() {}

  ngOnInit(): void {}
}
