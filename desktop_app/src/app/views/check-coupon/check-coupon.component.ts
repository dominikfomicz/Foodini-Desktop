import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/core/services/connection.service';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
	selector: 'app-check-coupon',
	templateUrl: './check-coupon.component.html',
	styleUrls: ['./check-coupon.component.scss']
})
export class CheckCouponComponent implements OnInit {
	coupon;
	CouponState: boolean;
	constructor(public service: ConnectionService, public alert: AlertService) {}

	ngOnInit() {
	}
	checkCoupon() {
		// console.log(this.unique_number);
		this.service.getDataByPost('coupons/checkCouponDesktopApp', {unique_number: this.coupon}).subscribe((data: any) => {
			console.log(data)
			if (data !== '-1') {
				this.alert.alertSuccess('Kupon został zrealizowany');
				this.coupon = '';
			} else {
				this.alert.alertError('Kupon nie został zrealizowany');
			}
		});
	}

	verifyCoupon() {
		this.service.getDataByPost('coupons/checkCouponNameDesktopApp', {unique_number: this.coupon}).subscribe((data: any) => {
			console.log(data);
			if (data) {
				this.alert.alertInformation(data);
			} else {
				this.alert.alertError('Kupon jest błędny lub został wykorzystany wczesniej');
			}
		});
	}
}
