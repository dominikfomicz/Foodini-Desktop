import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
	private tokenSource = new BehaviorSubject<boolean>(false);
	token = this.tokenSource.asObservable();

	constructor(private router: Router) { }

	get isLoggedIn() {
		if (localStorage.getItem('token') !== null) {
			this.tokenSource.next(true);
			return true;
		} else {
			this.tokenSource.next(false);
			return false;
		}
	}
}
