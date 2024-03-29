import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Entity } from '@definitions';
import { PendingReturnValues, ScheduledFareValues, UnassignedFareValues } from '../definitions';

export const selectedFareValidator =
  (
    fare: (Entity & PendingReturnValues) | (Entity & ScheduledFareValues) | (Entity & UnassignedFareValues) | undefined
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-argument
    fareHasId(fare) ? null : { invalidFare: { value: control.value } };

export const fareHasId = (candidate: Entity | undefined): boolean => candidate !== undefined && candidate.id.length === 36;

export const isValidFare = (fare: Entity): boolean => fareHasId(fare);
