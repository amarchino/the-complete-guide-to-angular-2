import { Component } from '@angular/core';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';

@Component({
  selector: 'app-root',
  imports: [ CounterControlsComponent, CounterOutputComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx';
}
