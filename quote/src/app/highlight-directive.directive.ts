import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirectiveDirective {

  constructor(private elem:ElementRef) {}
  @HostListener("click") onClicks(){
    this.elem.nativeElement.style.color='blue';
  }

}