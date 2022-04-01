import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, Atom } from '../data.service';
import { Observable } from 'rxjs';
import { Column } from 'ng2-qgrid';

const EXAMPLE_TAGS = [
	'define-column-hybrid',
	'Columns can be created both in html and typescript'
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

	rows: Observable<Atom[]>;

	columns: Column[] = [{
		key: 'mass',
		title: 'should be js Mass',
		canFilter: false,
		canSort: false,
	}, {
		key: 'symbol',
		title: 'should not be js Symbol',
		width: 200,
		canSort: false,
		canFilter: false
	}];

	constructor(dataService: DataService) {
		this.rows = dataService.getAtoms();
	}
}
