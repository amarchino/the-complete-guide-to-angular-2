import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrement, increment } from './counter.actions';
import { tap } from 'rxjs';

@Injectable()
export class CounterEffects {
  private readonly actions$ = inject(Actions);

  saveCount = createEffect(() => this.actions$.pipe(
    ofType(increment, decrement),
    tap((action) => {
      console.log(action);
      localStorage.setItem('count', action.value.toString());
    })
  ), { dispatch: false });
}
