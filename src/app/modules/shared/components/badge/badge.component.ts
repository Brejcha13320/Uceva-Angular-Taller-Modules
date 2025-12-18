import { Component, Input } from '@angular/core';
import { BadgeType, BadgeTypeText } from '../../interfaces/badge.interface';

@Component({
  selector: 'app-badge',
  standalone: false,
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {
  @Input() text: string = '';
  @Input() type: BadgeType = 'primary';
  @Input() typeText: BadgeTypeText = 'text-white';

  getClass(){
    return `bg-${this.type} ${this.typeText}`
  }
}
