import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  imports: [ AsyncPipe ]
})
export class CounterOutputComponent {
  private readonly store: Store<{ counter: number }> = inject(Store);
  count$: Observable<number> = this.store.select('counter');

}
