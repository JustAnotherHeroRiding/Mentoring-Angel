import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isSmallScreen = false;
  menuActive = false;

  constructor() {
    // Optional: Check screen size on load
    this.isSmallScreen = window.innerWidth < 630;
    window.onresize = () => {
      this.isSmallScreen = window.innerWidth < 630;
    };
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}
