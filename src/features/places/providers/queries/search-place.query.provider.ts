import { Observable } from 'rxjs';
import { FactoryProvider } from '@angular/core';
import { Place } from '@features/places/definitions/places';

export type SearchPlaceQuery = (search: string) => Observable<Place[]>;

export const SEARCH_PLACE_QUERY: symbol = Symbol('places.search-place.query');

export const searchPlaceQueryProvider = <TDependencies>(
  useFactory: (...providers: never[]) => SearchPlaceQuery,
  deps: TDependencies[] = []
): FactoryProvider => ({
  provide: SEARCH_PLACE_QUERY,
  useFactory,
  deps
});
