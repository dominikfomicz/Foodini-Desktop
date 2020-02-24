import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { CheckCouponComponent } from './views/check-coupon/check-coupon.component';
import { AuthGuard } from './core/services/auth.guard';
import { HistoryCouponComponent } from './views/history-coupon/history-coupon.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full'},
  { path: 'check', component: CheckCouponComponent, canActivate: [AuthGuard]},
  { path: 'history', component: HistoryCouponComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
