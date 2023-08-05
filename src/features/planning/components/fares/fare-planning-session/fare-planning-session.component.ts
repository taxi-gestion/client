import { Component, Input } from '@angular/core';
import { ScheduledPresentation } from '../../../common/fares.presentation';

@Component({
  selector: 'app-fare-planning-session',
  templateUrl: './fare-planning-session.component.html'
})
export class FarePlanningSessionComponent {
  @Input({ required: true }) public fare!: ScheduledPresentation;
}
