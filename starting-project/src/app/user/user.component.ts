import { Component, computed, EventEmitter, input, Output } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  readonly id = input.required<string>();
  readonly avatar = input.required<string>();
  readonly name = input.required<string>();

  @Output() select = new EventEmitter<string>();

  readonly imagePath = computed(() => `assets/users/${this.avatar()}`);

  onSelectUser() {
    this.select.emit(this.id());
  }
}
