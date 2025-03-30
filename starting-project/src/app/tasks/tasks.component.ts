import { Component, computed, input, signal } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  id = input.required<string>();
  name = input.required<string>();
  isAddingTask = signal(false);

  selectedUserTasks = computed(() => this.tasksService.getUserTasks(this.id())().filter((task) => task.userId === this.id()));

  constructor(private tasksService: TasksService) {}

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id);
  }
  onStartAddTask() {
    this.isAddingTask.set(true);
  }
  onCancelAddTask() {
    this.isAddingTask.set(false);
  }
  onAddTask(taskData: NewTaskData) {
    this.tasksService.addTask(taskData, this.id());
    this.isAddingTask.set(false);
  }
}
