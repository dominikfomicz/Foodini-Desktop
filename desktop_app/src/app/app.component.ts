import { Component, OnInit } from '@angular/core';
import { ConnectionService } from './core/services/connection.service';
import { AuthService } from './core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	loading = false;
	token;
	isLoggedIn;
	message = this.service.currentMessage;

	constructor(private router: Router, private service: ConnectionService, private auth: AuthService, private route: ActivatedRoute) {
		this.isLoggedIn = this.auth.isLoggedIn;
	}
	ngOnInit() {
		this.service.getUser();
		// this.service.currentMessage.subscribe(message => this.message = message);

		this.service.data$.subscribe( data => {
			this.loading = data;
		});

		this.auth.token.subscribe( (state: boolean) => {
			if (state) {
				this.token = state;

			} else {
				this.token = false;

			}
		});
	}

	logout() {
		console.log('wylogowuje');
		this.service.clearStorage();
		this.router.navigateByUrl('/');
	}
}
