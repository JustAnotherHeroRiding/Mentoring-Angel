import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  toDoListForm: FormGroup = new FormGroup<any>({
    taskInput: new FormControl('', Validators.required),
    tasks: new FormArray([]),
  });

  private _isEditing = false;

  constructor() {}

  ngOnInit(): void {
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
      this.isEditing = true;
    }
  }

  saveChanges() {
    this.isEditing = false;
    localStorage.setItem(
      'tasks',
      JSON.stringify(this.tasks.map((task) => task.value))
    );
  }
}
