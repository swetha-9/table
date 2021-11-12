import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects'; 
import { map, switchMap } from 'rxjs/operators';
import { MOCK_STREAM, MockAction, MockStream } from './mockaction';

@Injectable()
export class MockEffect {
  @Effect()
  loadStream$ = this.actions$.pipe(
    ofType<MockStream>(MOCK_STREAM),
    switchMap((action) => action.payload.stream),
    map((action) => new MockAction(action)),
  );

  constructor(private actions$: Actions) {}
}
