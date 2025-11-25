import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header';
// import { LogoutPopupComponent } from '../../popups/logout-popup/logout-popup.component';
// import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroBars3Solid } from '@ng-icons/heroicons/solid'; 
import { heroArrowRightStartOnRectangle, heroMagnifyingGlass } from '@ng-icons/heroicons/outline';

@NgModule({
  declarations: [
    HeaderComponent,
    // LogoutPopupComponent,
    // MobileMenuComponent
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ 
      heroBars3Solid,
      heroMagnifyingGlass,
      heroArrowRightStartOnRectangle
    })
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {}
