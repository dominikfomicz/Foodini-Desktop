import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { CheckCouponComponent } from './views/check-coupon/check-coupon.component';
const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'check', component: CheckCouponComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
