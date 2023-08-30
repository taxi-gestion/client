import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ScheduledFaresForDateQuery } from '../../providers';
import { Entity, Scheduled } from '@domain';
import { pipe as fpPipe } from 'fp-ts/function';
import { externalTypeCheckFor, scheduledFaresCodec } from '@codecs';
import { fold } from 'fp-ts/Either';
import { ValidationFailedAfterApiCallError } from '../../errors';

export const validatedScheduledFaresForDateQuery$ =
  (httpClient: HttpClient): ScheduledFaresForDateQuery =>
  (date: string): Observable<(Entity & Scheduled)[]> =>
    httpClient.get<unknown>(`/api/scheduled-fares-for-date/${date}`).pipe(
      map(scheduledFaresValidation),
      catchError(
        (error: Error | HttpErrorResponse, caught: Observable<(Entity & Scheduled)[]>): Observable<never> =>
          handleScheduledFaresForDateError$(error, caught)
      )
    );

const handleScheduledFaresForDateError$ = (
  error: Error | HttpErrorResponse,
  caught: Observable<(Entity & Scheduled)[]>
): Observable<never> => {
  if (error instanceof ValidationFailedAfterApiCallError) return throwError((): Error => error);

  switch ((error as HttpErrorResponse).error.__type) {
    default:
      return throwError((): Observable<(Entity & Scheduled)[]> => caught);
  }
};

const scheduledFaresValidation = (transfer: unknown): (Entity & Scheduled)[] =>
  fpPipe(
    transfer,
    externalTypeCheckFor<(Entity & Scheduled)[]>(scheduledFaresCodec),
    fold(
      // TODO Share error reporter between projects
      (): never => {
        throw new ValidationFailedAfterApiCallError(`Faudrait mettre le HttpReporter...`);
      },
      (validatedTransfer: (Entity & Scheduled)[]): (Entity & Scheduled)[] => validatedTransfer
    )
  );