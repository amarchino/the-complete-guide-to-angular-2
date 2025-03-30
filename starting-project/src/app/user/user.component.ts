import { Component, computed, input, output } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Inputs
  readonly user = input.required<{ id: string, avatar: string, name: string }>();

  // Outputs
  readonly select = output<string>();

  // Computed properties
  readonly imagePath = computed(() => `assets/users/${this.user().avatar}`);

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
