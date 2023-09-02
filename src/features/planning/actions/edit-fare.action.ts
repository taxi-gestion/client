import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { pipe as fpPipe } from 'fp-ts/function';
import { fold } from 'fp-ts/Either';
import { ValidationFailedAfterApiCallError, ValidationFailedBeforeApiCallError } from '../errors';
import { Entity, FaresEdited, ToEdit } from '@definitions';
import { externalTypeCheckFor, faresEditedCodec, fareToEditCodec } from '@codecs';
import { EditFareAction } from '../providers';

const editFareUrl = (): string => `/api/fare/edit`;

export const validatedEditFareAction$ =
  (http: HttpClient): EditFareAction =>
  (fareToEdit: Entity & ToEdit): Observable<FaresEdited> =>
    fpPipe(
      fareToEditCodec.decode(fareToEdit),
      fold(
        (): Observable<never> => throwError((): Error => new ValidationFailedBeforeApiCallError()),
        (validatedTransfer: ToEdit): Observable<FaresEdited> =>
          http.post<unknown>(editFareUrl(), validatedTransfer).pipe(
            map(editedFareAndReturnValidation),
            catchError(
              (error: Error | HttpErrorResponse, caught: Observable<FaresEdited>): Observable<never> =>
                handleEditedFareAndReturnError$(error, caught)
            )
          )
      )
    );

const editedFareAndReturnValidation = (transfer: unknown): FaresEdited =>
  fpPipe(
    transfer,
    externalTypeCheckFor<FaresEdited>(faresEditedCodec),
    fold(
      (): never => {
        throw new ValidationFailedAfterApiCallError(`Faudrait mettre le HttpReporter...`);
      },
      (validatedTransfer: FaresEdited): FaresEdited => validatedTransfer
    )
  );

const handleEditedFareAndReturnError$ = (
  error: Error | HttpErrorResponse,
  caught: Observable<FaresEdited>
): Observable<never> => {
  if (error instanceof ValidationFailedAfterApiCallError) return throwError((): Error => error);

  switch ((error as HttpErrorResponse).error.__type) {
    default:
      return throwError((): Observable<FaresEdited> => caught);
  }
};
