import { Component, Input } from '@angular/core';
import { FareForDatePresentation } from '../../../common/fares.presentation';

@Component({
  selector: 'app-fare-card',
  templateUrl: './fare-card.component.html'
})
export class FareCardComponent {
  @Input({ required: true }) public fare!: FareForDatePresentation;
}
