import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AlertService } from './alert.service';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root'
})
export class ConnectionService {
	mainUrl = 'http://repo.foodini.net.pl/';
	subject = new BehaviorSubject<boolean>(false);
	data$ = this.subject.asObservable();
	httpOptions = {};
	private messageSource = new BehaviorSubject('');
	currentMessage = this.messageSource.asObservable();


	private statusSource = new BehaviorSubject(false);
	currentStatus = this.statusSource.asObservable();

	test1;
	constructor(private http: HttpClient, private router: Router, private alert: AlertService, private auth: AuthService) {

	}



	setToken(token: string, user: string) {
		localStorage.setItem('token', token);
		localStorage.setItem('user', user);
	}

	getToken() {
		return localStorage.getItem('token');
	}

	getUser() {
		const userName = localStorage.getItem('user');
		this.messageSource.next(userName);
		return userName;
	}

	clearStorage() {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		this.messageSource.next('');
		return this.auth.isLoggedIn;
	}

	login(username: string, password: string) {
		this.setLoading(true);
		console.log(username);
		const post_data = new HttpParams()
			.set('username', username)
			.set('password', password)
			.set('client_id', '1')
			.set('client_secret', 'wYp5wj6LRF6zE8M2DAQofcOUAc7JHeGVlFF5P8au')
			.set('scope', '')
			.set('grant_type', 'password');

		this.httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/x-www-form-urlencoded'
			})
		};

		return this.http.post('http://repo.foodini.net.pl/oauth/token', post_data, this.httpOptions).pipe(map(
			callback => {
				this.setLoading(false);
				return callback;
			}
		));
	}

	getUserStatus(username) {
		const post_user_status = new HttpParams().set('uuid', username);
		return this.http.post('http://repo.foodini.net.pl/auth-api/getUserStatus', post_user_status, this.httpOptions).pipe((data => {
			return data;
		}),
		catchError(error => {
			if (error.status === 401) {
				// this.showError(error.statusText);
			} else if (error.status === 404) {
				// this.showError(error.statusText);
			} else if (error.status === 500) {
				// this.showError(error.statusText);
			} else {
				// this.showError(error.statusText);
			}
			return throwError(error);
			})
		);
	}

	getDataByPost(url: String, post_data: any) {
		this.setLoading(true);
		console.log(post_data)
		this.httpOptions = {
			headers: new HttpHeaders({
				'Authorization': 'Bearer ' + this.getToken(),
				'Content-Type': 'application/json;charset=utf-8'
			})
		};

		return this.http.post(this.mainUrl + url, post_data, {headers: new HttpHeaders({
			'Authorization': 'Bearer ' + this.getToken(),
			'Content-Type': 'application/json;charset=utf-8'
		}), responseType: 'text'})
			.pipe(
				(data => {
					this.setLoading(false);
					return data;
				}),
				catchError(error => {
					if (error.status === 401) {
						// this.showError(error.statusText);
					} else if (error.status === 404) {
						// this.showError(error.statusText);
					} else if (error.staatus === 500) {
						// this.showError(error.statusText);
					} else {
						// this.showError(error.statusText);
					}
					return throwError(error);
				})
			);
	}

	getDataByGet(url: String) {
		this.httpOptions = {
			headers: new HttpHeaders({
				'Authorization': 'Bearer ' + this.getToken(),
				'Content-Type': 'application/json;charset=utf-8'
			})
		};

		return this.http.get(this.mainUrl + url, this.httpOptions)
			.pipe((data => {
					return data;
				}),
				catchError(error => {
					if (error.status === 401) {
						// this.showError(error.statusText);
					} else if (error.status === 404) {
						// this.showError(error.statusText);
					} else if (error.status === 500) {
						// this.showError(error.statusText);
					} else {
						// this.showError(error.statusText);
					}
					return throwError(error);
				})
			);
	}

	setLoading(value) {
		// set the latest value for _data BehaviorSubject
		this.subject.next(value);
		console.log('laduje')
	}
	showError(message) {
		Swal.fire({
			title: '',
			text: message,
			icon: 'error',
			confirmButtonText: 'Ok'
		})
		.then((result) => {
			// if (result.value) {
			// 	localStorage.clear();
			// 	this.router.navigateByUrl('login');
			// }
		});

	}
	test(data) {
		return this.http.post('https://webhook.site/a8d1ab33-af3f-4466-a60d-445166dce1dc', data);
	}
}

