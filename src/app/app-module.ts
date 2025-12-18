import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';

import { SharedModule } from './shared/shared-module';
import { TableUsers } from './users/table-users/table-users';
import { TableUsersComponent } from './users/table-users/table-users.component/table-users.component';

@NgModule({
  declarations: [
    AppComponent,
    TableUsers,
    TableUsersComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
