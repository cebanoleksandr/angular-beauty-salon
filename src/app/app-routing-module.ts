import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './features/home/pages/home/home';
import { Login } from './features/auth/pages/login/login';
import { Register } from './features/auth/pages/register/register';
import { Contacts } from './features/contacts/pages/contacts/contacts';
import { Master } from './features/contacts/pages/master/master';
import { Services } from './features/services/pages/services/services';
import { ServiceDetail } from './features/services/pages/service-detail/service-detail';
import { Settings } from './features/settings/pages/settings/settings';
import { Profile } from './features/profile/pages/profile/profile';
import { NotFound } from './features/not-found/pages/not-found/not-found';
import { MainLayout as MainLayoutComponent } from './shared/components/layouts/main-layout/main-layout';
import { AuthLayout as AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: Login },
      { path: 'register', component: Register },
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: Home },
      { path: 'contacts', component: Contacts },
      { path: 'contacts/:id', component: Master },
      { path: 'services', component: Services },
      { path: 'services/:id', component: ServiceDetail },
      { path: 'settings', component: Settings },
      { path: 'profile/:id', component: Profile },
      { path: '**', component: NotFound },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
