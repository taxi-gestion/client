import { FactoryProvider } from '@angular/core';
import { Observable } from 'rxjs';
import { Entity, Pending } from '@definitions';

export const PENDING_RETURNS_FOR_DATE_QUERY: symbol = Symbol('fare.pending-returns-for-date.query');

export type PendingReturnsForDateQuery = (date: string) => Observable<(Entity & Pending)[]>;

export const pendingReturnsForDateQueryProvider = <TDependencies>(
  useFactory: (...providers: never[]) => PendingReturnsForDateQuery,
  deps: TDependencies[] = []
): FactoryProvider => ({
  provide: PENDING_RETURNS_FOR_DATE_QUERY,
  useFactory,
  deps
});
