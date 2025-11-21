import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contacts } from './pages/contacts/contacts';
import { Master } from './pages/master/master';



@NgModule({
  declarations: [
    Contacts,
    Master
  ],
  imports: [
    CommonModule
  ]
})
export class ContactsModule { }
