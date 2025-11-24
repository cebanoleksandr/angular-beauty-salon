import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayout as MainLayoutComponent } from './main-layout';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MainLayoutComponent]
})
export class MainLayoutModule { }
