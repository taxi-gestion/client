import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FareByDayPresentation } from '../../presentation';
import { FARES_BY_DAY_READ, FaresByDayRead } from '../../providers';
import { formatDate } from './daily.presenter';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './daily.page.html'
})
export class DailyPage {
  private readonly _today: Date = new Date();

  public today: string = formatDate(this._today);

  public constructor(@Inject(FARES_BY_DAY_READ) private readonly _faresByDayRead$: FaresByDayRead) {}

  public readonly faresByDay$: Observable<FareByDayPresentation[]> = this._faresByDayRead$(this._today);
}
