import { Component, ElementRef, Renderer2 } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

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
  constructor(
    private _forms: FormBuilder,
    private renderer: Renderer2,
    private element: ElementRef
  ) {}

  starControl = this._initStar();
  touched: boolean = false;
  isHovered: boolean = false;
  isClicked: boolean = false;

  ngOnInit() {
    //console.log(this.starControl);
  }

  onChange = (star: number) => {};
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
    this.onChange(this.starControl.getRawValue() as number);
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

  private _initStar(): FormControl<number | null> {
    return this._forms.control(null);
  }

  onHover(index: number, event: MouseEvent): void {
    const isHovered = event.type === 'mouseover';
    if (isHovered && !this.isClicked) {
      this.renderer.setProperty(
        this.element.nativeElement.querySelector('.star-icon'),
        'innerHTML',
        'star_half'
      );
    }
  }

  onLeave(index: number, event: MouseEvent) {
    const isLeaving = event.type === 'mouseleave';
    if (isLeaving && !this.isClicked) {
      this.renderer.setProperty(
        this.element.nativeElement.querySelector('.star-icon'),
        'innerHTML',
        'star_border'
      );
    }
  }

  onStarClick(index: number): void {
    this.isClicked = !this.isClicked;
    this.renderer.setProperty(
      this.element.nativeElement.querySelector('.star-icon'),
      'innerHTML',
      'star'
    );
    //this.starControl.setValue(index);
    this.notifyParent();
    this.markAsTouched();
  }
}
