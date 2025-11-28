import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';
import { heroBars3Solid, heroCog6ToothSolid, heroHomeSolid, heroPhoneSolid, heroSparklesSolid } from '@ng-icons/heroicons/solid'; 
import { heroArrowRightStartOnRectangle, heroMagnifyingGlass } from '@ng-icons/heroicons/outline';
import { RouterModule } from '@angular/router';
import { AuthLayout as AuthLayoutComponent } from './components/layouts/auth-layout/auth-layout';
import { MainLayout as MainLayoutComponent } from './components/layouts/main-layout/main-layout';
import { HeaderComponent } from './components/layouts/header/header';
import { Sidebar as SidebarComponent } from './components/layouts/sidebar/sidebar';

@NgModule({
  declarations: [
    MainLayoutComponent,
    SidebarComponent,
    HeaderComponent,
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgIconsModule.withIcons({ 
      heroBars3Solid,
      heroMagnifyingGlass,
      heroArrowRightStartOnRectangle,
      heroHomeSolid,
      heroSparklesSolid,
      heroPhoneSolid,
      heroCog6ToothSolid
    })
  ],
  exports: [
    MainLayoutComponent,
    SidebarComponent,
    HeaderComponent,
    AuthLayoutComponent
  ]
})
export class SharedModule { }
