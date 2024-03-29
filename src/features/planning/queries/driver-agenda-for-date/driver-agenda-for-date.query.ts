import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { DriverAgendaForDateQuery } from '../../providers';
import { Entity, Scheduled } from '@definitions';
import { pipe as fpipe } from 'fp-ts/function';
import { externalTypeCheckFor, scheduledFaresCodec } from '@codecs';
import { fold } from 'fp-ts/Either';
import { ValidationFailedOnApiResult } from '@features/common/form-validation';

export const validatedDriverAgendaForDateQuery$ =
  (httpClient: HttpClient): DriverAgendaForDateQuery =>
  ({ driver, date }: { driver: Entity; date: string }): Observable<(Entity & Scheduled)[]> =>
    httpClient.get<unknown>(`/api/driver-agenda/${driver.id}/${date}`).pipe(
      map(scheduledFaresValidation),
      catchError(
        (error: Error | HttpErrorResponse, caught: Observable<(Entity & Scheduled)[]>): Observable<never> =>
          handleDriverAgendaForDateError$(error, caught)
      )
    );

const handleDriverAgendaForDateError$ = (
  error: Error | HttpErrorResponse,
  caught: Observable<(Entity & Scheduled)[]>
): Observable<never> => {
  if (error instanceof ValidationFailedOnApiResult) return throwError((): Error => error);

  switch ((error as HttpErrorResponse).error.__type) {
    default:
      return throwError((): Observable<(Entity & Scheduled)[]> => caught);
  }
};

const scheduledFaresValidation = (transfer: unknown): (Entity & Scheduled)[] =>
  fpipe(
    transfer,
    externalTypeCheckFor<(Entity & Scheduled)[]>(scheduledFaresCodec),
    fold(
      // TODO Share error reporter between projects
      (): never => {
        throw new ValidationFailedOnApiResult(`Faudrait mettre le HttpReporter...`);
      },
      (validatedTransfer: (Entity & Scheduled)[]): (Entity & Scheduled)[] => validatedTransfer
    )
  );
