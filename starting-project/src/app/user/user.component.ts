import { Component, computed, input, output } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Inputs
  readonly id = input.required<string>();
  readonly avatar = input.required<string>();
  readonly name = input.required<string>();

  // Outputs
  readonly select = output<string>();

  // Computed properties
  readonly imagePath = computed(() => `assets/users/${this.avatar()}`);

  onSelectUser() {
    this.select.emit(this.id());
  }
}
