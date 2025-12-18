import { Component, Input } from '@angular/core';
import { BadgeType } from '@modules-shared/interfaces/badge.interface';
import { Engineering, User } from '@modules-users/interfaces/users.interface';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  standalone: false,
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
