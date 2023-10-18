import { HttpClient } from '@angular/common/http';
import { FactoryProvider, ValueProvider } from '@angular/core';

import { estimateJourneyQuery$, estimateJourneyQueryProvider } from '@features/common/journey';
import {
  listDriversQuery$,
  listDriversQueryProvider,
  listDriversWithOrderQuery$,
  listDriversWithOrderQueryProvider
} from '@features/common/driver';
import {
  regularByIdQuery$,
  regularByIdQueryProvider,
  searchRegularQueryProvider,
  searchRegularsQuery$
} from '@features/common/regular';
import { searchPlaceQuery$, searchPlaceQueryProvider } from '@features/common/place';
import { predictRecurrenceQuery$, predictRecurrenceQueryProvider } from '@features/common/recurrence';
import {
  deleteRegularActionProvider,
  editRegularActionProvider,
  registerRegularActionProvider,
  validatedDeleteRegularAction$,
  validatedEditRegularAction$,
  validatedRegisterRegularAction$
} from '@features/regular';
import {
  deleteFareActionProvider,
  editScheduledActionProvider,
  pendingReturnsForDateQueryProvider,
  scheduledFaresForDateQueryProvider,
  scheduleFareActionProvider,
  schedulePendingActionProvider,
  subcontractFareActionProvider,
  validatedDeleteFareAction$,
  validatedEditScheduledAction$,
  validatedPendingReturnsForDateQuery$,
  validatedScheduledFaresForDateQuery$,
  validatedScheduleFareAction$,
  validatedSchedulePendingAction$,
  validatedSubcontractFareAction$
} from '@features/fare';
import { driverAgendaForDateQueryProvider, validatedDriverAgendaForDateQuery$ } from '@features/planning';

export const PLANNING_PROVIDERS: (FactoryProvider | ValueProvider)[] = [
  deleteFareActionProvider(validatedDeleteFareAction$, [HttpClient]),
  deleteRegularActionProvider(validatedDeleteRegularAction$, [HttpClient]),
  driverAgendaForDateQueryProvider(validatedDriverAgendaForDateQuery$, [HttpClient]),
  editScheduledActionProvider(validatedEditScheduledAction$, [HttpClient]),
  editRegularActionProvider(validatedEditRegularAction$, [HttpClient]),
  estimateJourneyQueryProvider(estimateJourneyQuery$, [HttpClient]),
  listDriversQueryProvider(listDriversQuery$, [HttpClient]),
  listDriversWithOrderQueryProvider(listDriversWithOrderQuery$, [HttpClient]),
  pendingReturnsForDateQueryProvider(validatedPendingReturnsForDateQuery$, [HttpClient]),
  predictRecurrenceQueryProvider(predictRecurrenceQuery$, [HttpClient]),
  registerRegularActionProvider(validatedRegisterRegularAction$, [HttpClient]),
  regularByIdQueryProvider(regularByIdQuery$, [HttpClient]),
  scheduledFaresForDateQueryProvider(validatedScheduledFaresForDateQuery$, [HttpClient]),
  scheduleFareActionProvider(validatedScheduleFareAction$, [HttpClient]),
  schedulePendingActionProvider(validatedSchedulePendingAction$, [HttpClient]),
  searchPlaceQueryProvider(searchPlaceQuery$, [HttpClient]),
  searchRegularQueryProvider(searchRegularsQuery$, [HttpClient]),
  subcontractFareActionProvider(validatedSubcontractFareAction$, [HttpClient])
];
