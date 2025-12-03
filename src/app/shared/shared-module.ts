import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from './components/icon/icon.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { BadgeComponent } from './components/badge/badge.component';



@NgModule({
  declarations: [
    IconComponent,
    NavbarComponent,
    BadgeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    IconComponent,
    BadgeComponent,
    NavbarComponent,
  ]
})
export class SharedModule { }
