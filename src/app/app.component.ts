import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, Human } from '../data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const EXAMPLE_TAGS = [
	'filter-row-people-basic',
	'Filter can be applied to every column'
];

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	static tags = EXAMPLE_TAGS;
	title = EXAMPLE_TAGS[1];

	rows: Observable<Human[]>;

	constructor(dataService: DataService) {
		this.rows = dataService
			.getPeople()
			.pipe(
				map(xs =>
					xs.map((x: any) => {
						x.memberSince = new Date(x.memberSince);
						x.memberSince.setHours(0);
						x.memberSince.setMinutes(0);
						x.memberSince.setSeconds(0);
						return x;
					})
				)
			);
	}
}
