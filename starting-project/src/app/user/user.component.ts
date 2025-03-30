import { Component, computed, input } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  readonly avatar = input.required<string>();
  readonly name = input.required<string>();

  readonly imagePath = computed(() => `assets/users/${this.avatar()}`);

  onSelectUser() {
  }
}
