import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  OnInit,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[highlightOnOrder]',
})
export class HighlightOnOrderDirective {
  @Input() highlightOnOrder!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    this.animateAndShowSuccess();
  }

  private animateAndShowSuccess() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'animation',
      'flash 0.5s ease-out'
    );
    // Append a success sign, like a check mark
    const successSign = this.renderer.createElement('span');
    const text = this.renderer.createText(' ✔️'); // Success indicator
    this.renderer.appendChild(successSign, text);
    this.renderer.appendChild(this.el.nativeElement, successSign);

    // Set a timeout to remove the success sign and reset styles
    setTimeout(() => {
      this.renderer.removeChild(this.el.nativeElement, successSign);
      this.renderer.removeStyle(this.el.nativeElement, 'animation');
    }, 1500); // Adjust based on your animation duration and preference
  }
}
