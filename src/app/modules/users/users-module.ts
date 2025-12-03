import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing-module';
import { UsersComponent } from './users.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { TableUsersComponent } from './components/table-users/table-users.component';
import { SharedModule } from '../../shared/shared-module';


@NgModule({
  declarations: [
    UsersComponent,
    ListUsersComponent,
    TableUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
