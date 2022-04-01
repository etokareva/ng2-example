import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService, Atom } from '../data.service';
import { StyleRowContext } from 'ng2-qgrid';

const EXAMPLE_TAGS = [
	'style-row-basic',
	'Rows have custom style'
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

	constructor(dataService: DataService) {
		this.rows = dataService.getAtoms();
	}

	styleRow(row: Atom, context: StyleRowContext) {
		context.class(row.symbol, { 'background-color': `#${row.color}` });
	}
}
