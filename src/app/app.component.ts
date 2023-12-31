import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'matholl_client'; 
	initialized = false;

	ngOnInit(): void {
		// Check if user bobokitchen is logged in by checking localstorage
		// This is temporary until real login can be configured just so that
		// at least ppl that don't know about devtools can't use the app :')
		if (localStorage.getItem('username') === environment.username) {
			this.initialized = true;
		}
	}

	onLogin(userName: string, pass: string) {
		if (userName === environment.username && pass === environment.password) {
			this.initialized = true;
		}
		// Save something to sessionstorage
		localStorage.setItem('username', userName);
	}
}
