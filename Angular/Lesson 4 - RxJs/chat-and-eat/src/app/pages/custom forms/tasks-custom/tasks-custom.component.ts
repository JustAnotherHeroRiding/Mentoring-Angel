import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

export interface Task {
  id: number | null;
  name: string | null;
  description: string | null;
}

@Component({
  selector: 'app-tasks-custom',
  templateUrl: './tasks-custom.component.html',
  styleUrls: ['./tasks-custom.component.scss'],
})
export class TasksCustomComponent {
  newTask = this._initNewTask;
  addedTasks = this._initAddedTasks;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  private get _initNewTask() {
    return this._formBuilder.group({
      id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
    });
  }

  private get _initAddedTasks() {
    return this._formBuilder.array([]);
  }

  addTask() {
    const task = this.newTask.getRawValue() as Task;
    const control = new FormControl(
      { id: Date.now(), name: task.name, description: task.description },
      Validators.required
    );
    control.disable();
    this.addedTasks.push(control);
  }

  get myAddedTasks() {
    return this.addedTasks.controls;
  }

  addedTasksStateCheck() {
    console.log('added tasks state change');
    console.log(this.addedTasks.getRawValue());
  }
}
