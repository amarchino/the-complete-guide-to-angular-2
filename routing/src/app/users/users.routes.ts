import { ResolveFn, Routes } from '@angular/router';
import { canLeaveEditPage, NewTaskComponent } from '../tasks/new-task/new-task.component';
import { Task } from '../tasks/task/task.model';
import { TasksService } from '../tasks/tasks.service';
import { inject } from '@angular/core';

export const resolveUserTasks: ResolveFn<Task[]> = (route) => {
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


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    loadComponent: () => import('../tasks/tasks.component').then(mod => mod.TasksComponent),
    runGuardsAndResolvers: 'always',
    resolve: {
      userTasks: resolveUserTasks
    }
  },
  {
    path: 'tasks/new',
    component: NewTaskComponent,
    canDeactivate: [
      canLeaveEditPage
    ]
  }
]
