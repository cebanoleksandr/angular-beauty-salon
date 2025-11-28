import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  sidebarItems = [
    { title: 'Домашня', icon: 'heroHomeSolid', href: '/home' },
    { title: 'Послуги', icon: 'heroSparklesSolid', href: '/services' },
    { title: 'Контакти', icon: 'heroPhoneSolid', href: '/contacts' },
    { title: 'Налаштування', icon: 'heroCog6ToothSolid', href: '/settings' },
  ];
}
