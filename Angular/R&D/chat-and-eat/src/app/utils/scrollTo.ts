import { ElementRef } from '@angular/core';

export const scrollToBottom = (element: ElementRef) => {
  const nativeElement = element.nativeElement;
  setTimeout(() => {
    nativeElement.scrollTo({
      top: nativeElement.scrollHeight,
      behavior: 'smooth',
    });
  }, 200);
};

export const scrollToTop = (element: ElementRef) => {
  const nativeElement = element.nativeElement;
  setTimeout(() => {
    nativeElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, 200);
};
