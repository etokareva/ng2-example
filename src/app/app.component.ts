import { DataService, Human } from '../data.service';
import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Grid, GridModel } from 'ng2-qgrid';
import { Observable } from 'rxjs';

const EXAMPLE_TAGS = [
	'column-visibility-basic',
	'Columns can be hidden/shown using UI buttons'
];

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleColumnColumnVisibilityBasicComponent {
	static tags = EXAMPLE_TAGS;
	title = EXAMPLE_TAGS[1];

	rows$: Observable<Human[]> = this.dataService.getPeople();
	gridModel: GridModel;

	showLastName = true;
	showFirstName = true;

	constructor(private dataService: DataService,
		private qgrid: Grid
	) {
		this.gridModel = qgrid.model();
	}

	hideCity() {
		const columns = this.gridModel.data().columns.filter(x => x.key !== 'city');

		this.gridModel.columnList({ columns });
		this.gridModel.data({ columns });
	}
}
