import { Component, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  imports: [ RouterOutlet, RouterLink ],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  message = input.required<string>();
  userName = input.required<string>();

  ngOnInit(): void {
    console.log(this.message());
  }
}

export const resolveUserName: ResolveFn<string> = (route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) => {
  const usersService = inject(UsersService);
  return usersService.users.find(u => u.id === route.paramMap.get('userId'))?.name ?? '';
}
