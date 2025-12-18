import { Component } from '@angular/core';
import { NAVBAR_ITEMS } from '../../../../core/config/navbar.config';
import { NavbarItem } from '../../interfaces/navbar.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: false,
})
export class NavbarComponent {
  navbarItems: NavbarItem[] = [];
  constructor(){
    this.navbarItems = NAVBAR_ITEMS;
  }
}
