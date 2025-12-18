import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@modules-shared/shared-module';
import { TableUsersComponent } from './components/table-users/table-users.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { UsersRoutingModule } from './users-routing-module';
import { UsersComponent } from './users.component';


@NgModule({
  declarations: [
    TableUsersComponent,
    ListUsersComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
