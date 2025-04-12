import { Component, computed, inject, input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';
import { ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterStateSnapshot } from '@angular/router';
import { Task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink ],
})
export class TasksComponent {
  userTasks = input.required<Task[]>();
  userId = input.required<string>();
  order = input<'asc' | 'desc' | undefined>('desc');
}

export const resolveUserTasks: ResolveFn<Task[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const order = route.queryParams['order'];
  const userId = route.paramMap.get('userId');
  const tasksService = inject(TasksService);
  const tasks = tasksService
    .allTasks()
    .filter(task => task.userId === userId)
    .sort((a, b) => {
      if (a.id === b.id) {
        return 0;
      }
      if(order === 'desc' || order === undefined) {
        return a.id > b.id ? -1 : 1;
      }
      return a.id > b.id ? 1 : -1;
    });
  return tasks.length ? tasks : [];
}
