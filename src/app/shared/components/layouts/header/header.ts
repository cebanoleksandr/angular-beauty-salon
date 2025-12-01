import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  standalone: false
})
export class HeaderComponent {
  isLogoutPopupVisible = false;
  isMobileMenuOpen = false;
  searchTerm: string = '';

  constructor(private router: Router) {}

  handleLogout() {
    this.isLogoutPopupVisible = false;
    localStorage.setItem('token', '');
    this.router.navigate(['/login']);
  }
}
