import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

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
  addedTasks: FormArray<FormControl<Task>> = this._initAddedTasks;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addedTasks.valueChanges.subscribe((values) => {
      console.log('Tasks updated:', values);
      localStorage.setItem(
        'tasks',
        JSON.stringify(this.addedTasks.controls.map((control) => control.value))
      );
    });
  }

  private get _initNewTask() {
    return this._formBuilder.group({
      id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
    });
  }

  private get _initAddedTasks(): FormArray {
    const storedTasks: Task[] = JSON.parse(
      localStorage.getItem('tasks') || '[]'
    );

    return this._formBuilder.array(
      storedTasks.map((task) =>
        this._formBuilder.control({
          id: task.id,
          name: task.name,
          description: task.description,
        })
      )
    );
  }

  addTask() {
    const task = this.newTask.getRawValue() as Task;
    task.id = Date.now();
    const control = new FormControl(task, Validators.required);
    control.disable();
    this.addedTasks.push(control as FormControl<Task>);
    localStorage.setItem(
      'tasks',
      JSON.stringify(this.addedTasks.controls.map((control) => control.value))
    );
    this.newTask.reset();
  }

  get myAddedTasks() {
    return this.addedTasks.controls as FormControl[];
  }

  addedTasksStateCheck() {
    console.log('added tasks state change');
    console.log(this.addedTasks.getRawValue());
  }

  clearTasks() {
    this.addedTasks.clear();
    localStorage.removeItem('tasks');
  }
}
