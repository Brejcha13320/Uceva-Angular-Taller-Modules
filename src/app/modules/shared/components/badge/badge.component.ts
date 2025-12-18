import { Component, Input } from '@angular/core';
import { BadgeType, BadgeTypeText } from '../../interfaces/badge.interface';

@Component({
  selector: 'app-badge',
  template: `<span class="badge" [class]="getClass()" >{{ text }}</span>`,
  standalone: false,
})
export class BadgeComponent {
  @Input() text: string = '';
  @Input() type: BadgeType = 'primary';
  @Input() typeText: BadgeTypeText = 'text-white';

  getClass(){
    return `bg-${this.type} ${this.typeText}`
  }
}
