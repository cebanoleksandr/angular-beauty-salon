import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayout as MainLayoutComponent } from './main-layout';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header-module';
import { SidebarModule } from '../sidebar/sidebar-module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    SidebarModule
  ],
  exports: [MainLayoutComponent]
})
export class MainLayoutModule { }
