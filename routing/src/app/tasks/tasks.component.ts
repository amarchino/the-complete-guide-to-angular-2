import { Component, computed, inject, input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink ],
})
export class TasksComponent {
  private readonly tasksService = inject(TasksService);
  userId = input.required<string>();
  order = input<'asc' | 'desc'>('desc');
  userTasks = computed(() => this.tasksService
    .allTasks()
    .filter(task => task.userId === this.userId())
    .sort((a, b) => {
      if (a.id === b.id) {
        return 0;
      }
      if(this.order() === 'desc' || this.order() === undefined) {
        return a.id > b.id ? -1 : 1;
      }
      return a.id > b.id ? 1 : -1;
    })
  );

}
