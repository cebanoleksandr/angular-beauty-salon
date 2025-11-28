import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-item',
  standalone: false,
  templateUrl: './sidebar-item.html',
  styleUrl: './sidebar-item.css',
})
export class SidebarItem {
  @Input() item!: { title: string; icon: string; href: string };
}
