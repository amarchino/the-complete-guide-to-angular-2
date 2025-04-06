import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);

  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, { initialValue: 0 });

  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const subscription = this.clickCount$.subscribe({
      next: value => console.log(`Clicked button ${value} times.`)
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }

  onClick() {
    this.clickCount.update(previousCount => previousCount + 1);
  }
}
