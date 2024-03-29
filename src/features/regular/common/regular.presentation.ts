import { Civility } from '@definitions';
import { array as ioArray, string as ioString, type as ioType, Type, undefined as ioUndefined, union as ioUnion } from 'io-ts';
import { civilityCodec } from '@codecs';
import { FormControl, Validators } from '@angular/forms';
import { AddPhoneFields, AddPhonesFields, phonesFormControls, phoneValuesCodec } from '@features/common/phone';
import { RegularValues } from '@features/regular';
import { waypointsArrayFormControl, waypointValuesCodec } from '@features/common/waypoint';
import { AddWaypointFields, AddWaypointsFields } from '../../common/waypoint/components/fields.form';

export const DEFAULT_CIVILITY: Civility = 'Mr';

export const regularFormCodec: Type<RegularValues> = ioType({
  civility: civilityCodec,
  firstname: ioUnion([ioString, ioUndefined]),
  lastname: ioString,
  phones: ioUnion([ioArray(phoneValuesCodec), ioUndefined]),
  waypoints: ioUnion([ioArray(waypointValuesCodec), ioUndefined]),
  comment: ioUnion([ioString, ioUndefined]),
  subcontractedClient: ioUnion([ioString, ioUndefined])
});

export type RegularFields = AddPhonesFields<'phones'> &
  AddWaypointsFields<'waypoints'> & {
    civility: FormControl<RegularValues['civility']>;
    firstname: FormControl<RegularValues['firstname']>;
    lastname: FormControl<RegularValues['lastname']>;
    comment: FormControl<RegularValues['comment']>;
    subcontractedClient: FormControl<RegularValues['subcontractedClient']>;
  };

export type PatchRegularFields = AddPhoneFields<'phone'> | AddWaypointFields<'waypoint'>;

export const regularFormControls = (): RegularFields => ({
  civility: new FormControl<RegularValues['civility']>(DEFAULT_CIVILITY, {
    nonNullable: true,
    validators: [Validators.required]
  }),
  firstname: new FormControl<RegularValues['firstname']>(undefined, { nonNullable: true, validators: [] }),
  lastname: new FormControl<RegularValues['lastname']>('', { nonNullable: true, validators: [Validators.required] }),
  ...phonesFormControls('phones'),
  ...waypointsArrayFormControl('waypoints'),
  comment: new FormControl<RegularValues['comment']>(undefined, { nonNullable: true, validators: [] }),
  subcontractedClient: new FormControl<RegularValues['subcontractedClient']>(undefined, {
    nonNullable: true,
    validators: []
  })
});

export type RegularHistoryScheduledItem = {
  driver: string;
  datetime: string;
  isMedicalDrive: boolean;
  isTwoWayDrive: boolean;
  departure: string;
  arrival: string;
  duration: number;
  distance: number;
};

export type RegularHistoryValues = {
  scheduled: RegularHistoryScheduledItem[];
};
