import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  QueryList
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const DEFAULT_INDEX: number = -1;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'placeResultsDropdown',
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[appPlaceResultsDropdown]',
  templateUrl: './place-results-dropdown.component.html'
})
export class PlaceResultsDropdownComponent {
  private _expanded: boolean = false;

  private readonly _expanded$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this._expanded);

  public activeIndex: number = DEFAULT_INDEX;

  public expanded$: Observable<boolean> = this._expanded$.asObservable();

  @ContentChildren('results') public results: QueryList<ElementRef> | null = null;

  @Input() public dropdownControl: HTMLElement | null = null;

  @Output() public readonly indexChange: EventEmitter<number> = new EventEmitter<number>();

  @Input() public set expanded(expanded: boolean) {
    this._expanded$.next(expanded);
    this._expanded = expanded;
  }

  private clickOnMenuControl(clickEvent: Event): boolean {
    return clickEvent.target === this.dropdownControl;
  }

  public expand(): void {
    this._expanded$.next(true);
    this._expanded = true;
  }

  public reduce(): void {
    this.dropdownControl?.focus();
    this._expanded$.next(false);
    this._expanded = false;
  }

  public setIndex(index: number): void {
    this.activeIndex = index;
    this.indexChange.next(this.activeIndex);
  }

  public focus(): void {
    if (this.results?.first == null) return;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    this.results.first.nativeElement.firstChild.focus();
  }

  @HostListener('document:click', ['$event']) public onClickOutside(clickEvent: Event): void {
    if (!this._expanded || this.clickOnMenuControl(clickEvent)) return;
    this._expanded$.next(false);
  }

  @HostListener('keydown.escape') public onEscape(): void {
    this.reduce();
  }
}
