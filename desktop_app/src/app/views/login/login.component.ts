import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../core/services/connection.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	username;
	password;
	isLoggedIn;

	// title = 'angular-electron-demo';
	constructor(public service: ConnectionService, public router: Router, private auth: AuthService, private alert: AlertService) {
		this.isLoggedIn = this.auth.isLoggedIn;
		if (this.isLoggedIn) {
			this.router.navigateByUrl('check');
		}
	}

	login() {
		// this.showLogin = true;
		this.service.login(this.username, this.password).subscribe(
			(data) => {
				if (data && data['access_token']) {
					console.log(data['access_token']);


					this.service.getUserStatus(this.username).subscribe(callback => {
						if (callback === -1 || callback === 2 || callback === 3) {
							this.service.setToken(data['access_token'], this.username);
							this.service.getUser();
							this.router.navigateByUrl('/check');
						} else {
							this.alert.alertError('Brak odpowiednich uprawnień');
						}
					});
					// this.showLogin = false;
					// this.alert.alertSuccess('Zostałeś zalogowany!');
				} else {
					this.alert.alertError('Brak odpowiednich uprawnień');
					// this.alert.alertSuccess('Nie zostałeś zalogowany!');
				}
			},
			response => {
				console.log(response);
				if (response.status === 401) {
					// this.service.showError(response.error.message || response.statusText);
				} else if (response.status === 404) {
					// this.service.showError(response.error.message || response.statusText);
				} else if (response.status === 500) {
					// this.service.showError(response.error.message || response.statusText);
				} else {
					// this.service.showError(response.error.message || response.statusText);
				}
				// if (response.)
			});
	}
}
