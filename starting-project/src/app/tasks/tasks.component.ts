import { Component, computed, input, signal } from '@angular/core';
import { TasksService } from './tasks.service';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [ NewTaskComponent, TaskComponent ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  id = input.required<string>();
  name = input.required<string>();
  isAddingTask = signal(false);

  selectedUserTasks = computed(() => this.tasksService.getUserTasks(this.id())().filter((task) => task.userId === this.id()));

  constructor(private tasksService: TasksService) {}

  onStartAddTask() {
    this.isAddingTask.set(true);
  }
  onCloseAddTask() {
    this.isAddingTask.set(false);
  }
}
