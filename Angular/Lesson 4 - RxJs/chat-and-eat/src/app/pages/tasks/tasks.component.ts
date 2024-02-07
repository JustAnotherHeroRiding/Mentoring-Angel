import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  toDoListForm: FormGroup = new FormGroup<any>({
    taskInput: new FormControl('', Validators.required),
    tasks: new FormArray([]),
  });

  constructor() {}
  get tasks(): FormControl[] {
    return (this.toDoListForm.get('tasks') as FormArray)
      .controls as FormControl[];
  }

  get taskInput(): FormControl<any> {
    return this.toDoListForm.get('taskInput') as FormControl;
  }

  onSubmit() {
    const taskValue = this.taskInput.value;
    if (this.taskInput.valid) {
      const newTask = new FormControl(taskValue);
      (this.toDoListForm.get('tasks') as FormArray).push(newTask);
      this.taskInput.reset();
    }
  }
}
