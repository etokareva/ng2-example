import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { DataService, Atom } from '../data.service';
import { Observable } from 'rxjs';
import { GridComponent, Grid } from 'ng2-qgrid';

const EXAMPLE_TAGS = [
	'focus-cell-custom',
	'Cell can be focused by entering its number into focus input field and clicking "focus" button'
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

	@ViewChild(GridComponent, { static: true }) grid: GridComponent;
	rows: Observable<Atom[]>;

	constructor(dataService: DataService, private qgrid: Grid) {
		this.rows = dataService.getAtoms();
	}

	focus(rowIndex) {
		const { model } = this.grid;
		const service = this.qgrid.service(model);

		// navigate to the 2nd page to the bottom
		service.focus(Number.parseInt(rowIndex, 10) - 1);
	}
}
