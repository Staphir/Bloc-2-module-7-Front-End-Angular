import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlightBackgroundColor]'
})
export class HighlightBackgroundColor implements OnInit{
  @Input('appHighlightBackgroundColor') defaultColor?: string;
  @Input() highlightColor?: string;

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.highlightColor) return;
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (!this.defaultColor) return;
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.background-color') backgroundColor = this.defaultColor;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'pink');
  }

  ngOnInit(): void {
        this.backgroundColor = this.defaultColor;
    }

}
