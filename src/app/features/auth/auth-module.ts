import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';



@NgModule({
  declarations: [
    Login,
    Register
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
