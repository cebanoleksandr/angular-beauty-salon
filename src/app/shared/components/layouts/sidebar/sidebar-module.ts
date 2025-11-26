import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from './sidebar';
import { NgIconsModule } from '@ng-icons/core';
import { heroCog6ToothSolid, heroHomeSolid, heroPhoneSolid, heroSparklesSolid } from '@ng-icons/heroicons/solid';

@NgModule({
  declarations: [
    Sidebar
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ 
      heroHomeSolid,
      heroSparklesSolid,
      heroPhoneSolid,
      heroCog6ToothSolid
    })
  ],
  exports: [Sidebar]
})
export class SidebarModule { }
