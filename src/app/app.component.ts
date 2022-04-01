import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService, Atom } from '../data.service';
import { StyleCellContext, Column } from 'ng2-qgrid';

const EXAMPLE_TAGS = [
	'style-cell-basic',
	'Some cells have custom style'
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

	styleCell(row: Atom, column: Column, context: StyleCellContext) {
		if (column.key === 'symbol') {
			context.class(row.symbol, {
				'color': `#${row.color}`,
				'background': '#3f51b5'
			});
		}
	}
}
