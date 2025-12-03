import { Component, Input } from '@angular/core';
import { Engineering, User } from '../../interfaces/users.interface';
import { BadgeType } from '../../../../shared/interfaces/badge.interface';
import { Themes } from '../../../../core/interfaces/themes.interface';

@Component({
  selector: 'app-table-users',
  standalone: false,
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.scss',
})
export class TableUsersComponent {
  @Input() users: User[] = [];

  engineeringMap: Record<Engineering, BadgeType> = {
    'Sistemas' : 'success',
    'Electronica': 'primary',
    'Biomedica': 'warning',
    'Industrial': 'danger',
    'Ambiental': 'secondary'
  }
}
