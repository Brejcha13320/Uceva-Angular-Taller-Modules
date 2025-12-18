import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `<i class="bi" [class]="'bi-' + icon"></i>`,
  standalone: false,
})
export class IconComponent {
  @Input({ required: true }) icon: string = '';
}
