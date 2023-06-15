import { FactoryProvider } from '@angular/core';
import { Observable } from 'rxjs';

export type FareToSchedule = {
  clientIdentity: string;
  clientPhone: string;
  date: Date;
  driveFrom: string;
  driveKind: 'one-way' | 'outward' | 'return';
  driveNature: 'medical' | 'standard';
  driverIdentity: string | undefined;
  driveTo: string;
  startTime: string;
};

export type ScheduleFareAction = (fareToSchedule: FareToSchedule) => Observable<object>;

export const SCHEDULE_FARE_ACTION: symbol = Symbol('planning.schedule-fare.action');

export const scheduleFareActionProvider = <TDependencies>(
  useFactory: (...providers: never[]) => ScheduleFareAction,
  deps: TDependencies[] = []
): FactoryProvider => ({
  provide: SCHEDULE_FARE_ACTION,
  useFactory,
  deps
});