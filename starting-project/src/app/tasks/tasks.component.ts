import { Component, computed, input, signal } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";

const tasks = signal([
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
]);

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  id = input.required<string>();
  name = input.required<string>();
  isAddingTask = signal(false);

  selectedUserTasks = computed(() => tasks().filter((task) => task.userId === this.id()));

  onCompleteTask(id: string) {
    tasks.update(currentTasks => currentTasks.filter(task => task.id !== id));
  }
  onStartAddTask() {
    this.isAddingTask.set(true);
  }
  onCancelAddTask() {
    this.isAddingTask.set(false);
  }
}
