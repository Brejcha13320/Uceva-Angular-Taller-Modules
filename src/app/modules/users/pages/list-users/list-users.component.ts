import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../interfaces/users.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-list-users',
  template: `<app-table-users [users]="users" ></app-table-users>`,
  standalone: false,
})
export class ListUsersComponent implements OnInit {
  users: User[] = [];
  private usersService = inject(UsersService);

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe({
      next: (users) => this.users = users,
      error: (error) => console.error(error),
    })
  }
}