import { InjectionToken } from '@angular/core';

export interface ToastHorizontalPosition {
  position: 'left' | 'right' | 'center';
}

export const DefaultToastPosition: ToastHorizontalPosition = {
  position: 'center',
};

export const TOAST_CONFIG_TOKEN = new InjectionToken<ToastHorizontalPosition>(
  'TOAST_CONFIG',
  {
    factory: () => DefaultToastPosition,
  }
);
