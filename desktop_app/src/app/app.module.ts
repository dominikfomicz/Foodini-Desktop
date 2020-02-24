import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './core/services/auth.service';
import { AuthGuard } from './core/services/auth.guard';

import { ConnectionService } from './core/services/connection.service';
import { LoginComponent } from './views/login/login.component';
import { CheckCouponComponent } from './views/check-coupon/check-coupon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatProgressSpinnerModule, MatInputModule, MatSelectModule, MatListModule, MatCardModule, MatIconModule } from '@angular/material';
import { HistoryCouponComponent } from './views/history-coupon/history-coupon.component';
@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		CheckCouponComponent,
		HistoryCouponComponent
	],
	imports: [
		MatIconModule,
		MatCardModule,
		MatListModule,
		MatMenuModule,
		MatProgressSpinnerModule,
		MatSelectModule,
		MatInputModule,
		BrowserModule,
		FormsModule,
		HttpClientModule,
		AppRoutingModule,
		BrowserAnimationsModule
	],
	providers: [ConnectionService, AuthService, AuthGuard],
	bootstrap: [AppComponent]
})
export class AppModule { }
