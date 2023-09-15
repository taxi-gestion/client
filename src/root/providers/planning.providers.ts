import { HttpClient } from '@angular/common/http';
import { FactoryProvider, ValueProvider } from '@angular/core';
import {
  deleteFareActionProvider,
  deleteRegularActionProvider,
  driverAgendaForDateQueryProvider,
  editFareActionProvider,
  editRegularActionProvider,
  pendingReturnsForDateQueryProvider,
  registerRegularActionProvider,
  scheduledFaresForDateQueryProvider,
  scheduleFareActionProvider,
  schedulePendingActionProvider,
  subcontractFareActionProvider,
  validatedDeleteFareAction$,
  validatedDeleteRegularAction$,
  validatedDriverAgendaForDateQuery$,
  validatedEditFareAction$,
  validatedEditRegularAction$,
  validatedPendingReturnsForDateQuery$,
  validatedRegisterRegularAction$,
  validatedScheduledFaresForDateQuery$,
  validatedScheduleFareAction$,
  validatedSchedulePendingAction$,
  validatedSubcontractFareAction$
} from '@features/planning';

import {
  estimateJourneyQuery$,
  estimateJourneyQueryProvider,
  listDriversQueryProvider,
  predictRecurrenceQuery$,
  predictRecurrenceQueryProvider,
  searchPlaceQuery$,
  searchPlaceQueryProvider,
  searchRegularQueryProvider,
  searchRegularsQuery$
} from '@features/common';
import { listDriversQuery$ } from '../../features/common/driver/queries/list-drivers';

export const PLANNING_PROVIDERS: (FactoryProvider | ValueProvider)[] = [
  deleteFareActionProvider(validatedDeleteFareAction$, [HttpClient]),
  deleteRegularActionProvider(validatedDeleteRegularAction$, [HttpClient]),
  driverAgendaForDateQueryProvider(validatedDriverAgendaForDateQuery$, [HttpClient]),
  editFareActionProvider(validatedEditFareAction$, [HttpClient]),
  editRegularActionProvider(validatedEditRegularAction$, [HttpClient]),
  estimateJourneyQueryProvider(estimateJourneyQuery$, [HttpClient]),
  listDriversQueryProvider(listDriversQuery$, [HttpClient]),
  pendingReturnsForDateQueryProvider(validatedPendingReturnsForDateQuery$, [HttpClient]),
  predictRecurrenceQueryProvider(predictRecurrenceQuery$, [HttpClient]),
  registerRegularActionProvider(validatedRegisterRegularAction$, [HttpClient]),
  scheduledFaresForDateQueryProvider(validatedScheduledFaresForDateQuery$, [HttpClient]),
  scheduleFareActionProvider(validatedScheduleFareAction$, [HttpClient]),
  schedulePendingActionProvider(validatedSchedulePendingAction$, [HttpClient]),
  searchPlaceQueryProvider(searchPlaceQuery$, [HttpClient]),
  searchRegularQueryProvider(searchRegularsQuery$, [HttpClient]),
  subcontractFareActionProvider(validatedSubcontractFareAction$, [HttpClient])
];
