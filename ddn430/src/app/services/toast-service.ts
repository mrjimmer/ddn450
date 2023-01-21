import { Injectable, TemplateRef } from '@angular/core';

export interface ToastInfo {
  header: string;
  body: string;
  delay?: number;
  classname: any;
  
}

@Injectable({ providedIn: 'root' })
export class AppToastService {
  toasts: ToastInfo[] = [];

  show(header: string, body: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ header, body, ...options });
  }
  remove(toast: ToastInfo) {
    this.toasts = this.toasts.filter(t => t != toast);
  }
}
