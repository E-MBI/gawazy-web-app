import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appClickOutSide]',
  standalone: true,
})
export class ClickOutSideDirective {
  @Output() clickOutSide = new EventEmitter<void>();
  constructor(private elRef: ElementRef) {}
  @HostListener('document:click', ['$event']) onClick(e: Event | any) {
    const clickInSide = this.elRef.nativeElement.contains(e.target);

    if (!clickInSide) {
      this.clickOutSide.emit();
    }
  }
}
