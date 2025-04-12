import { Component, computed, DestroyRef, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  private readonly usersService = inject(UsersService);
  // private readonly activatedRoute = inject(ActivatedRoute);
  // private readonly destroyRef = inject(DestroyRef);
  userId = input.required<string>();

  userName = computed(() => this.usersService.users.find(u => u.id === this.userId())?.name);
  // userNameViaObservables = '';

  ngOnInit(): void {
    // console.log(this.activatedRoute);
    // const subsciption = this.activatedRoute.paramMap.subscribe({
    //   next: paramMap => {
    //     this.userNameViaObservables = this.usersService.users.find(u => u.id === paramMap.get('userId'))?.name ?? '';
    //   }
    // });
    // this.destroyRef.onDestroy(() => {
    //   subsciption.unsubscribe();
    // })
  }

}
