import { CountryHolidayPage } from './pages/country-holiday/country-holiday.component';
import { LoginPage } from './pages/login/login.component';
import { HomePage } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'country-holiday',
    component: CountryHolidayPage,
  },
/*   {
    path: 'qrCodeGen',
    component: QrCodeGenPage,
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
