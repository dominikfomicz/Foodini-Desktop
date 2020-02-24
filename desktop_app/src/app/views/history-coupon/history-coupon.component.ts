import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/core/services/connection.service';

@Component({
	selector: 'app-history-coupon',
	templateUrl: './history-coupon.component.html',
	styleUrls: ['./history-coupon.component.scss']
})
export class HistoryCouponComponent implements OnInit {
	historyCouponList;

	constructor(private service: ConnectionService) { }

	ngOnInit() {
		this.getHistory();
	}
	getHistory() {
		this.service.getDataByGet('coupons/getUsedCouponsStatistic').subscribe(
			callback => {
				this.historyCouponList = callback;
		});
	}
}
