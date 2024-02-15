import { Component, Injector, Input, Optional, Self } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  AbstractControl,
  ValidationErrors,
  NG_VALIDATORS,
  NgControl,
} from '@angular/forms';

@Component({
  selector: 'choose-quantity',
  templateUrl: 'choose-quantity.component.html',
  styleUrls: ['choose-quantity.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ChooseQuantityComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: ChooseQuantityComponent,
    },
  ],
})
export class ChooseQuantityComponent implements ControlValueAccessor {
  quantity = 0;

  @Input()
  increment!: number;
  @Input() max?: number; // Accept max value as input

  onChange = (quantity: number) => {};
  onTouched = () => {};

  touched = false;
  disabled = false;
  private _ngControl: NgControl | null = null;

  constructor(private injector: Injector) {}

  ngOnInit() {
    // Lazily load NgControl to avoid circular dependency
    Promise.resolve().then(
      () => (this._ngControl = this.injector.get(NgControl, null))
    );
  }

  onAdd() {
    this.markAsTouched();
    if (
      !this.disabled &&
      (!this.max || this.quantity + this.increment <= this.max)
    ) {
      this.quantity += this.increment;
      this.onChange(this.quantity);
    }
  }

  onRemove() {
    this.markAsTouched();
    if (!this.disabled) {
      this.quantity -= this.increment;
      this.onChange(this.quantity);
    }
  }

  writeValue(quantity: number) {
    this.quantity = quantity;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
  validate(control: AbstractControl): ValidationErrors | null {
    const quantity = control.value;
    const errors: ValidationErrors = {};
    if (quantity < 0) {
      errors['mustBePositive'] = true;
    }
    if (this.max !== undefined && quantity > this.max) {
      errors['maxQuantityExceeded'] = { max: this.max };
    }
    return Object.keys(errors).length ? errors : null;
  }

  get controlErrors(): ValidationErrors | null {
    return this._ngControl?.errors || null;
  }

  public getErrorDetail(errorKey: string, detailKey: string): any {
    return this._ngControl?.errors?.[errorKey]?.[detailKey] || null;
  }
}
