import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, Quote } from '../data.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	static id = 'look-quotes-basic';

	rows: Observable<Quote[]>;

	constructor(dataService: DataService) {
		this.rows = dataService.getQuotes();
	}
}
