/*
import { ChangeDetectionStrategy, Component, Inject, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { BehaviorSubject, catchError, combineLatest, filter, map, Observable, of, startWith, switchMap, take } from 'rxjs';
import { PlanningSettings } from '../../components/planning/planning-settings/planning-settings.component';
import { DEFAULT_END_HOUR, DEFAULT_START_HOUR } from '../../components/planning/planning-settings/planning-settings.form';
import { toDailyDriverPlanning } from '../../common/fares.presenter';
import { Driver, Entity, Pending, Scheduled } from '@definitions';
import { DailyDriverPlanning, ScheduledPlanningSession } from '../../common/fares.presentation';
import { LIST_DRIVERS_QUERY, ListDriversQuery } from '@features/common/driver';
import { SessionContext, SlotContext } from '../../components/planning/planning-row/planning-row.component';
import { ToasterPresenter } from '../../../../root/components/toaster/toaster.presenter';
import { NavbarComponent } from '../../../../root/components';

import {
  PENDING_RETURNS_FOR_DATE_QUERY,
  PendingReturnsForDateQuery,
  SCHEDULED_FARES_FOR_DATE_QUERY,
  ScheduledFaresForDateQuery
} from '@features/fare';
import { routeParamToDateString } from '@features/common/angular';

const DEFAULT_PLANNING_SETTINGS: PlanningSettings = {
  interval: 60,
  start: +DEFAULT_START_HOUR * 60,
  end: +DEFAULT_END_HOUR * 60
};

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './daily-planning.layout.html'
})
export class DailyPlanningLayout {
  @ViewChild(NavbarComponent) private readonly _navbar!: NavbarComponent;
  public toggleNavbar(): void {
    this._navbar.toggle();
  }

  public planningDay$: Observable<string> = this._route.params.pipe(
    map((params: Params): string => routeParamToDateString('date', params, new Date()))
  );

  public planningSettings: PlanningSettings = DEFAULT_PLANNING_SETTINGS;

  private readonly _selectedSlotContext$: BehaviorSubject<SlotContext<DailyDriverPlanning> | null> =
    new BehaviorSubject<SlotContext<DailyDriverPlanning> | null>(null);

  public readonly selectedSlotContext$: Observable<SlotContext<DailyDriverPlanning> | null> =
    this._selectedSlotContext$.asObservable();

  private readonly _selectedSessionContext$: BehaviorSubject<SessionContext<
    ScheduledPlanningSession,
    DailyDriverPlanning
  > | null> = new BehaviorSubject<SessionContext<ScheduledPlanningSession, DailyDriverPlanning> | null>(null);

  public readonly selectedSessionContext$: Observable<SessionContext<ScheduledPlanningSession, DailyDriverPlanning> | null> =
    this._selectedSessionContext$.asObservable();

  public readonly drivers$: Observable<(Driver & Entity)[]> = of([]).pipe(
    switchMap((): Observable<(Driver & Entity)[]> => this._listDriversQuery()),
    take(1)
  );

  public readonly refresh$: Observable<NavigationEnd> = this._router.events.pipe(
    filter((routerEvent: unknown): routerEvent is NavigationEnd => routerEvent instanceof NavigationEnd)
  );

  public readonly scheduledFares$: Observable<(Entity & Scheduled)[]> = this.refresh$.pipe(
    startWith(null),
    switchMap((): Observable<Params> => this._route.params),
    switchMap(
      (params: Params): Observable<(Entity & Scheduled)[]> =>
        this._faresForDateQuery(routeParamToDateString('date', params, new Date()))
    ),
    catchError((error: Error): Observable<(Entity & Scheduled)[]> => {
      this._toaster.toast({
        content: `Échec de la récupération des courses : ${error.name} | ${error.message}`,
        status: 'danger',
        title: 'Opération échouée'
      });
      return of([]);
    })
  );

  public readonly returnsToSchedule$: Observable<(Entity & Pending)[]> = this.refresh$.pipe(
    startWith(null),
    switchMap((): Observable<Params> => this._route.params),
    switchMap(
      (params: Params): Observable<(Entity & Pending)[]> => this._pendingReturnsForDateQuery(paramsToDateDayString(params))
    ),
    catchError((error: Error): Observable<(Entity & Pending)[]> => {
      this._toaster.toast({
        content: `Échec de la récupération des retours en attente : ${error.name} | ${error.message}`,
        status: 'danger',
        title: 'Opération échouée'
      });
      return of([]);
    })
  );

  public readonly plannings$: Observable<DailyDriverPlanning[]> = combineLatest([this.drivers$, this.scheduledFares$]).pipe(
    map(([drivers, fares]: [(Driver & Entity)[], (Entity & Scheduled)[]]): DailyDriverPlanning[] =>
      toDailyDriverPlanning(drivers, fares)
    )
  );

  public constructor(
    private readonly _toaster: ToasterPresenter,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    @Inject(SCHEDULED_FARES_FOR_DATE_QUERY) private readonly _faresForDateQuery: ScheduledFaresForDateQuery,
    @Inject(PENDING_RETURNS_FOR_DATE_QUERY) private readonly _pendingReturnsForDateQuery: PendingReturnsForDateQuery,
    @Inject(LIST_DRIVERS_QUERY) private readonly _listDriversQuery: ListDriversQuery
  ) {}

  public async onPlanningDateChange(planningDate: string): Promise<void> {
    await this._router.navigate(['planning', 'daily', planningDate]);
  }

  public onPlanningSlotClick(slotContext: SlotContext<DailyDriverPlanning>): void {
    this._selectedSlotContext$.next(slotContext);
  }

  public onPlanningSessionClick(sessionContext: SessionContext<ScheduledPlanningSession, DailyDriverPlanning>): void {
    this._selectedSessionContext$.next(sessionContext);
  }
}
*/
