import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';
import { Task } from '../tasks-custom/tasks-custom.component';
@Component({
  selector: 'single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TaskComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: TaskComponent,
    },
  ],
})
export class TaskComponent implements ControlValueAccessor, OnInit, Validator {
  ngOnInit(): void {}

  task?: Task;
  taskGroup = this._initTaskGroup;
  touched: boolean = false;
  originalTask?: Task;

  onChange = (task: Task) => {};
  onTouched = () => {};

  constructor(private _formBuilder: FormBuilder) {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.taskGroup.patchValue(obj);
  }

  notifyParent() {
    this.onChange(this.taskGroup.getRawValue());
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(isDisabled: boolean) {
    this.taskGroup.disable();
  }

  private get _initTaskGroup() {
    return this._formBuilder.group({
      id: new FormControl<number | null>(null),
      name: new FormControl<string | null>(null, Validators.required),
      description: new FormControl<string | null>(null, Validators.required),
    });
  }

  edit() {
    this.taskGroup.enable();
    this.markAsTouched();
    this.originalTask = this.taskGroup.getRawValue();
  }

  exit() {
    this.taskGroup.disable();
    if (this.originalTask) {
      this.taskGroup.patchValue(this.originalTask as Partial<Task>);
    }
  }

  saveChanges() {
    this.taskGroup.disable();
    this.notifyParent();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.taskGroup.valid) {
      return null;
    } else {
      return {
        error: 'Some fields are empty',
      };
    }
  }
}
