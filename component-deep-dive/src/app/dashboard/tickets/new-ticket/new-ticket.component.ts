import { AfterViewInit, Component, ElementRef, OnInit, output, signal, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit, OnInit {
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  enteredTitle = signal('');
  enteredText = signal('');

  add = output<{ title: string, text: string }>();

  onSubmit() {
    this.add.emit({ title: this.enteredTitle(), text: this.enteredText() });
    this.enteredText.set('');
    this.enteredTitle.set('');
    //this.form()?.nativeElement.reset();
  }

  ngOnInit(): void {
    console.log('On init');
    console.log(this.form()?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('After view init');
    console.log(this.form()?.nativeElement);
  }
}
