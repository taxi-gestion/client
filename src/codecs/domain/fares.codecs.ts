import type { Type } from 'io-ts';
import {
  intersection as ioIntersection,
  keyof as ioKeyof,
  literal as ioLiteral,
  string as ioString,
  type as ioType
} from 'io-ts';
import {
  Drive,
  Entity,
  Pending,
  ReturnDrive,
  Scheduled,
  Subcontracted,
  ToEdit,
  ToSchedule,
  ToSubcontract
} from '../../definitions';
import { placeCodec } from '../common';
import { driveCodec, durationDistanceCodec, entityCodec, passengerCodec } from './traits.codecs';
import { driverEntityCodec } from './driver.codecs';

export const toScheduleCodec: Type<ToSchedule> = ioIntersection([
  driveCodec,
  durationDistanceCodec,
  ioType({
    driver: driverEntityCodec,
    passenger: passengerCodec,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    kind: ioKeyof({ 'one-way': null, 'two-way': null }),
    status: ioLiteral('to-schedule'),
    nature: ioKeyof({ medical: null, standard: null })
  })
]);

export const returnDriveCodec: Type<ReturnDrive> = ioIntersection([
  driveCodec,
  durationDistanceCodec,
  ioType({
    driver: driverEntityCodec,
    status: ioLiteral('return-drive')
  })
]);

export const toEditCodec: Type<ToEdit> = ioIntersection([
  driveCodec,
  durationDistanceCodec,
  ioType({
    driver: driverEntityCodec,
    passenger: passengerCodec,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    kind: ioKeyof({ 'one-way': null, 'two-way': null }),
    status: ioLiteral('to-edit'),
    nature: ioKeyof({ medical: null, standard: null })
  })
]);

export const fareToEditCodec: Type<Entity & ToEdit> = ioIntersection([entityCodec, toEditCodec]);

export const pendingReturnCodec: Type<Entity & Pending> = ioIntersection([
  entityCodec,
  passengerCodec,
  driveCodec,
  ioType({
    kind: ioLiteral('two-way'),
    status: ioLiteral('pending-return'),
    nature: ioKeyof({ medical: null, standard: null })
  })
]);

export const scheduledFareCodec: Type<Entity & Scheduled> = ioIntersection([
  entityCodec,
  driveCodec,
  durationDistanceCodec,
  ioType({
    driver: driverEntityCodec,
    passenger: passengerCodec,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    kind: ioKeyof({ 'one-way': null, 'two-way': null }),
    status: ioLiteral('scheduled'),
    nature: ioKeyof({ medical: null, standard: null })
  })
]);

// TODO Remove once type Drive has been updated
const driveWithoutDriverCodec: Type<Omit<Drive, 'driver'>> = ioType({
  datetime: ioString,
  departure: placeCodec,
  destination: placeCodec
});

export const fareToSubcontractCodec: Type<Entity & ToSubcontract> = ioIntersection([
  entityCodec,
  ioType({
    subcontractor: ioString,
    status: ioLiteral('to-subcontract')
  })
]);

export const subcontractedFareCodec: Type<Entity & Subcontracted> = ioIntersection([
  entityCodec,
  passengerCodec,
  driveWithoutDriverCodec,
  durationDistanceCodec,
  ioType({
    subcontractor: ioString,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    kind: ioKeyof({ 'one-way': null, 'two-way': null }),
    status: ioLiteral('subcontracted'),
    nature: ioKeyof({ medical: null, standard: null })
  })
]);

export const toSubcontractCodec: Type<ToSubcontract> = ioType({
  subcontractor: ioString,
  status: ioLiteral('to-subcontract')
});
