import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const subscription = interval(1000)
      .pipe(
        map(val => val * 2)
      )
      .subscribe({
        next: val => console.log(val)
      });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
