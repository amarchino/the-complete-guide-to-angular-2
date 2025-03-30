import { Component, computed, input, output } from '@angular/core';

// type User = { id: string, avatar: string, name: string };
interface User { id: string, avatar: string, name: string };

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Inputs
  readonly user = input.required<User>();

  // Outputs
  readonly select = output<string>();

  // Computed properties
  readonly imagePath = computed(() => `assets/users/${this.user().avatar}`);

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
