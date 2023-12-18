import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  task = '';
  tasks?: string[];

  ngOnInit(): void {
    this.tasks = localStorage.getItem('tasks')
      ? JSON.parse(localStorage.getItem('tasks')!)
      : [];
  }

  addTask(task: string) {
    localStorage.setItem(
      'tasks',
      JSON.stringify([...(this.tasks ?? []), task])
    );
    this.tasks = [...(this.tasks ?? []), task];
    this.task = '';
  }

  removeTask(task: string) {
    this.tasks = this.tasks?.filter((t) => t !== task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
