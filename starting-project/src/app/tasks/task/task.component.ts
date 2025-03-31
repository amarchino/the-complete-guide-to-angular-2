import { Component, input } from '@angular/core';
import { type Task } from './task.model';
import { TasksService } from '../tasks.service';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ CardComponent, DatePipe ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<Task>();

  constructor(private tasksService: TasksService) {}

  onCompleteTasks() {
    this.tasksService.removeTask(this.task().id);
  }
}
