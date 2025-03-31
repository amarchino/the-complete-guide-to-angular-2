import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [ FormsModule ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  onSubmit() {
    console.log('Submitted');
    console.log(`
      Initial investment: ${this.initialInvestment()}
      Annual investment: ${this.annualInvestment()}
      Expected return: ${this.expectedReturn()}
      Duration: ${this.duration()}
    `);
  }
}
