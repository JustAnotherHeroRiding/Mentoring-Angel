import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
export interface Task {
  id: number;
  content: string;
}

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  task = '';
  tasks: Task[] = [];
  completed: Task[] = [];

  ngOnInit(): void {
    this.tasks = localStorage.getItem('tasks')
      ? JSON.parse(localStorage.getItem('tasks')!)
      : [];
    this.completed = localStorage.getItem('completed')
      ? JSON.parse(localStorage.getItem('completed')!)
      : [];
  }

  addTask(taskContent: string) {
    const task = {
      id: new Date().getTime(), // Unique ID using current timestamp
      content: taskContent,
    };
    this.tasks = [...this.tasks, task];
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.task = '';
  }

  markCompleted(taskId: number) {
    const taskIndex = this.tasks.findIndex((t) => t.id === taskId);
    if (taskIndex > -1) {
      const [completedTask] = this.tasks.splice(taskIndex, 1);
      this.completed.push(completedTask);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      localStorage.setItem('completed', JSON.stringify(this.completed));
    }
  }

  removeTask(taskId: number) {
    this.completed = this.completed.filter((t) => t.id !== taskId);
    localStorage.setItem('completed', JSON.stringify(this.completed));
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer.id === event.container.id) {
      // Move the item within the same list
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // Transfer the item from one list to another
      const item = event.previousContainer.data[event.previousIndex];
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      // Check which list the item was transferred to and update localStorage accordingly
      if (event.container.id === 'tasksList') {
        // Item moved to tasks list
        this.completed = this.completed.filter((t) => t.id !== item.id);
        localStorage.setItem('completed', JSON.stringify(this.completed));
      } else {
        // Item moved to completed list
        this.tasks = this.tasks.filter((t) => t.id !== item.id);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    }

    // Update localStorage for both lists
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    localStorage.setItem('completed', JSON.stringify(this.completed));
  }
}
