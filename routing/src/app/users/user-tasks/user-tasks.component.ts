import { Component, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  private readonly usersService = inject(UsersService);
  userId = input.required<string>();

  userName = computed(() => this.usersService.users.find(u => u.id === this.userId())?.name);

}
