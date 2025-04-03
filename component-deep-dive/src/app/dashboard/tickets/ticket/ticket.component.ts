import { Component, input, output, signal } from '@angular/core';
import { type Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
  close = output();
  detailsVisible = signal<boolean>(false);

  onToggleDetails() {
    this.detailsVisible.update(currentValue => !currentValue);
  }
  onMarkAsCompleted() {
    this.close.emit();
  }
}
