import { Component, computed, input, output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ CardComponent ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Inputs
  readonly user = input.required<User>();
  readonly selected = input.required<boolean>();

  // Outputs
  readonly select = output<string>();

  // Computed properties
  readonly imagePath = computed(() => `assets/users/${this.user().avatar}`);

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
