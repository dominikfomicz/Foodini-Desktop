import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../core/services/connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username;
	password;
	// title = 'angular-electron-demo';
	constructor(public service: ConnectionService, public router: Router) {}

	login() {
		// console.log(this.username, this.password);
		// this.showLogin = true;
		this.service.login(this.username, this.password).subscribe(
			(data) => {
				if (data && data['access_token']) {
					console.log(data['access_token']);
					this.service.setToken(data['access_token']);
					// this.showLogin = false;
					// this.alert.alertSuccess('Zostałeś zalogowany!');
				} else {

					// this.alert.alertSuccess('Nie zostałeś zalogowany!');
				}
				return this.router.navigateByUrl('/check');
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
