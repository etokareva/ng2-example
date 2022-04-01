import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { Command, Grid, GridComponent } from 'ng2-qgrid';
import { Observable } from 'rxjs';
import { DataService, Human } from '../data.service';

const EXAMPLE_TAGS = [
	'data-row-delete-selection',
	'Table rows can be deleted and not break selection'
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
	rows: Observable<Human[]>;
	deleteRow = new Command({
		execute: (row: Human) => {
			const { model } = this.grid;

			const rows = model.data().rows.filter(x => x !== row);
			model.data({ rows });
		}
	});

	constructor(dataService: DataService, private qgrid: Grid) {
		this.rows = dataService.getPeople();
	}
}
