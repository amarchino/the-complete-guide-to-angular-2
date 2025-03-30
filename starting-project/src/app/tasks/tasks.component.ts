import { Component, computed, input, signal } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData, Task } from './task/task.model';

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

  selectedUserTasks = computed(() => ([] as Task[]).filter((task) => task.userId === this.id()));

  onCompleteTask(id: string) {
    // TODO
  }
  onStartAddTask() {
    this.isAddingTask.set(true);
  }
  onCancelAddTask() {
    this.isAddingTask.set(false);
  }
  onAddTask(taskData: NewTaskData) {
    // TODO
    this.isAddingTask.set(false);
  }
}
