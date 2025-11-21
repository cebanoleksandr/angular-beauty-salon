import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Services } from './pages/services/services';
import { ServiceDetail } from './pages/service-detail/service-detail';



@NgModule({
  declarations: [
    Services,
    ServiceDetail
  ],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { }
