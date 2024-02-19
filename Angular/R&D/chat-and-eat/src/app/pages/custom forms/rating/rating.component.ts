import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { RatingControl } from '../registration-form/registration-form.component';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: RatingComponent,
    },
  ],
})
export class RatingComponent implements ControlValueAccessor {
  constructor(private _forms: FormBuilder) {}

  starControl = this._initStar();
  touched: boolean = false;

  hoveredIndex: number = 0;
  selectedIndex: number = 0;

  ngOnInit() {
    // console.log(this.starControl);
  }

  onChange = (star: RatingControl | null) => {};
  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.starControl.patchValue(obj);
  }

  notifyParent() {
    this.onChange(this.starControl.getRawValue());
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(isDisabled: boolean) {
    this.starControl.disable();
  }

  private _initStar() {
    return this._forms.control<RatingControl>({
      possibleValues: [],
      selected: 0,
    });
  }

  get possibleRatings(): number[] {
    return this.starControl.value?.possibleValues as number[];
  }

  onHover(index: number, event: MouseEvent): void {
    this.hoveredIndex = index;
  }

  onLeave(index: number, event: MouseEvent): void {
    this.hoveredIndex = -1;
  }

  onStarClick(index: number): void {
    this.selectedIndex = index;
    this.starControl.patchValue({
      selected: index,
      possibleValues: this.starControl.value?.possibleValues as number[],
    });
    this.notifyParent();
    this.markAsTouched();
  }
}
