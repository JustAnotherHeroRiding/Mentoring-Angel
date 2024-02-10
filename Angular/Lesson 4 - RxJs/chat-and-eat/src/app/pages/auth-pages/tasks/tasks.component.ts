import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CanComponentDeactivate } from 'src/guards/unsaved-changes.guard';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit, CanComponentDeactivate {
  toDoListForm: FormGroup = new FormGroup<any>({
    taskInput: new FormControl('', Validators.required),
    tasks: new FormArray([]),
  });

  private _isEditing = false;
  private globalEditing = false;
  private originalTasks: string[] = [];

  @ViewChildren('taskInput') taskInputs?: QueryList<ElementRef>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  canDeactivate() {
    return (
      !this.isEditing ||
      confirm('There are unsaved changes, are you sure you want to leave?')
    );
  }

  get tasks(): FormControl[] {
    return (this.toDoListForm.get('tasks') as FormArray)
      .controls as FormControl[];
  }

  get taskInput(): FormControl {
    return this.toDoListForm.get('taskInput') as FormControl;
  }

  get isEditing(): boolean {
    return this._isEditing;
  }

  set isEditing(value: boolean) {
    this._isEditing = value;
    const tasks = (this.toDoListForm.get('tasks') as FormArray)
      .controls as FormControl[];
    tasks.forEach((control: FormControl) => {
      if (this._isEditing) control.enable();
      else control.disable();
    });
  }

  private loadTasks() {
    const storageTasks = localStorage.getItem('tasks');
    if (storageTasks) {
      const savedTasks = JSON.parse(storageTasks);
      savedTasks.forEach((task: string) => {
        const newTask = new FormControl(
          { value: task, disabled: !this._isEditing },
          Validators.required
        );
        (this.toDoListForm.get('tasks') as FormArray).push(newTask);
      });
    }
  }

  private storeOriginalTasks() {
    this.originalTasks = this.tasks.map((control) => control.value);
  }

  private restoreOriginalTasks() {
    const tasksArray = this.toDoListForm.get('tasks') as FormArray;
    tasksArray.clear();
    this.originalTasks.forEach((task) => {
      tasksArray.push(new FormControl(task, Validators.required));
    });
  }

  onSubmit() {
    const taskValue = this.taskInput.value;
    if (this.taskInput.valid) {
      const newTask = new FormControl(
        { value: taskValue, disabled: !this.isEditing },
        Validators.required
      );
      (this.toDoListForm.get('tasks') as FormArray).push(newTask);
      localStorage.setItem(
        'tasks',
        JSON.stringify(this.tasks.map((control) => control.value))
      );
      this.taskInput.reset();
    }
  }

  editTasks() {
    if (this.isEditing) this.saveChanges();
    else {
      this.storeOriginalTasks();
      this.isEditing = true;
      this.globalEditing = true;
    }
  }

  enableTask(index: number) {
    const taskControl = (this.toDoListForm.get('tasks') as FormArray).at(
      index
    ) as FormControl;
    taskControl.enable();

    this.cdr.detectChanges();

    const inputElements = this.taskInputs?.toArray();
    if (inputElements && inputElements[index]) {
      inputElements[index].nativeElement.focus();
    }
  }

  saveAndDisable(index: number) {
    if (!this.globalEditing) {
      const taskControl = (this.toDoListForm.get('tasks') as FormArray).at(
        index
      ) as FormControl;
      taskControl.disable();
      this.saveChanges();
    }
  }

  exitEdit() {
    this.restoreOriginalTasks();
    this.isEditing = false;
    this.globalEditing = false;
  }

  saveChanges() {
    this.isEditing = false;
    this.globalEditing = false;
    localStorage.setItem(
      'tasks',
      JSON.stringify(this.tasks.map((task) => task.value))
    );
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    localStorage.setItem(
      'tasks',
      JSON.stringify(this.tasks.map((task) => task.value))
    );
  }
}
