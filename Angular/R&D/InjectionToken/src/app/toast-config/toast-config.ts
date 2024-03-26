import { InjectionToken } from '@angular/core';

export interface ToastConfig {
  horizontalPosition: 'left' | 'right' | 'center';
  verticalPosition: 'top' | 'bottom';
}

export const DefaultToastPosition: ToastConfig = {
  horizontalPosition: 'center',
  verticalPosition: 'bottom',
};

export const TOAST_CONFIG_TOKEN = new InjectionToken<ToastConfig>(
  'TOAST_CONFIG',
  {
    factory: () => DefaultToastPosition,
  }
);
