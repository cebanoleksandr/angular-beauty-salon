import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthLayout as AuthLayoutComponent } from './auth-layout';

@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [AuthLayoutComponent]
})
export class AuthLayoutModule { }
