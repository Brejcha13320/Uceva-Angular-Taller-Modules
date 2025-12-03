import { Component } from '@angular/core';
import { NavbarItem } from '../../interfaces/navbar.interface';
import { NAVBAR_ITEMS } from '../../../core/config/navbar.config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: false,
})
export class NavbarComponent {

  navbarItems: NavbarItem[] = [];

  constructor(){
    this.navbarItems = NAVBAR_ITEMS;
  }

}
