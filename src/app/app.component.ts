import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	static id = 'sample-orders';

	rows$: Observable<any> = this.http.get<any[]>('assets/samples/orders.json');

	constructor(private http: HttpClient) {
	}
}
