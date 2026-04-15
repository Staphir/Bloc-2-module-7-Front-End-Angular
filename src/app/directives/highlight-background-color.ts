import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, effect, signal, Renderer2} from '@angular/core';

//test Angular plus récent avec signals
@Directive({
  selector: '[appHighlightBackgroundColor]'
})
export class HighlightBackgroundColor implements OnInit {
  @Input() set appHighlightBackgroundColor(color: string | undefined) {
    this.defaultColor.set(color);
  }
  @Input() set highlightColor(color: string | undefined) {
    this._highlightColor.set(color);
  }

  private defaultColor = signal<string | undefined>(undefined);
  private _highlightColor = signal<string | undefined>(undefined);
  private isHovering = signal(false);

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovering.set(true);
    if (this._highlightColor()) {
      this.backgroundColor = this._highlightColor() || '';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovering.set(false);
    this.updateBackgroundColor();
  }

  @HostBinding('style.background-color') backgroundColor = '';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'pink');

    effect(() => {
      this.updateBackgroundColor();
    });
  }

  ngOnInit(): void {
    this.updateBackgroundColor();
  }

  private updateBackgroundColor(): void {
    this.backgroundColor = this.defaultColor() || '';
  }
}
