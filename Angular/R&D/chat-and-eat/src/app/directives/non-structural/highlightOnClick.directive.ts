import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  OnInit,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[highlightOnClick]',
})
export class HighlightOnClickDirective {
  @Input() highlightOnOrder!: string;
  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    console.log(event);
    this.animateAndShowSuccess();
  }

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  private animateAndShowSuccess() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'animation',
      'flash 0.5s ease-out'
    );
    const successSign = this.renderer.createElement('span');
    const text = this.renderer.createText(' ✔️');
    this.renderer.appendChild(successSign, text);
    this.renderer.appendChild(this.element.nativeElement, successSign);

    setTimeout(() => {
      this.renderer.removeChild(this.element.nativeElement, successSign);
      this.renderer.removeStyle(this.element.nativeElement, 'animation');
    }, 1500);
  }
}
