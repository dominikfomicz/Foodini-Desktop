import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/core/services/connection.service';

@Component({
	selector: 'app-check-coupon',
	templateUrl: './check-coupon.component.html',
	styleUrls: ['./check-coupon.component.scss']
})
export class CheckCouponComponent implements OnInit {
	unique_number;
	constructor(public service: ConnectionService) {}

	ngOnInit() {
	}
	checkCoupon() {
		// console.log(this.unique_number);
		this.service.getDataByPost('coupons/checkCoupon', {unique_number: this.unique_number}).subscribe(data=>{
			if (data === 1) {
				alert('zrealizowano kupon');
			} else {
				alert('kupon nie istnieje');
			}
			console.log(data);
		});
	}
}
