import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-form-example',
  templateUrl: './custom-form-example.component.html',
  styleUrls: ['./custom-form-example.component.scss'],
})
export class CustomFormExampleComponent {
  form = this.fb.group({
    totalQuantity: [60, [Validators.required, Validators.max(100)]],
    address: [null, [Validators.required]],
  });
  constructor(private fb: FormBuilder) {}
}
