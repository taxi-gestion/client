import {
  boolean as ioBoolean,
  string as ioString,
  type as ioType,
  Type,
  undefined as ioUndefined,
  union as ioUnion
} from 'io-ts';
import { DestinationValues } from '../definitions';
import { placeValuesCodec } from '@features/common/place';

export const destinationValuesCodec: Type<DestinationValues> = ioType({
  isTwoWayDrive: ioBoolean,
  isMedicalDrive: ioBoolean,
  place: placeValuesCodec,
  comment: ioUnion([ioString, ioUndefined]),
  destinationName: ioString
});
