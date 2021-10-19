import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective {
  @Input('appMarcar') colorFondo: string = 'yellow';
  @HostBinding('style.backgroundColor') color: string;

  constructor(private elementRef: ElementRef) {
    console.log(elementRef)
    console.log(this.colorFondo)
    this.color = elementRef.nativeElement.style.backgroundColor;
    // elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

  ngOnInit() {
    console.log(this.colorFondo)
    // this.colorFondo = this.colorFondo || 'yellow';
    // this.colorFondo = this.colorFondo ? this.colorFondo : 'yellow';
    if (!this.colorFondo) {
      this.colorFondo = 'yellow';
    }
  }

  @HostListener('mouseover') onMouseOver() {
    // this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    this.color = this.colorFondo;
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.elementRef.nativeElement.style.backgroundColor = 'white';
    this.color = 'white'
  }

}
