import { Component, signal } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { type Ticket } from './ticket.model';

@Component({
  selector: 'app-tickets',
  imports: [NewTicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets = signal<Ticket[]>([]);

  onAdd(ticketData: { title: string, text: string }) {
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.text,
      id: Math.random().toString(),
      status: 'open'
    };
    this.tickets.set([
      ...this.tickets(),
      ticket
    ]);
  }
}
