import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  private form = viewChild<ElementRef<HTMLFormElement>>('form');

  onSubmit(title: string, text: string) {
    console.log(`Entered title: ${title} - text: ${text}`);
    this.form()?.nativeElement.reset();
  }
}
