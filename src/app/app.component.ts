import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { DataService, Human } from '../data.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	static id = 'grid-size';

	rows: Observable<Human[]>;
	sizeClass = 'fill';

	constructor(dataService: DataService) {
		this.rows = dataService.getPeople();
	}
}
