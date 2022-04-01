import { Component, ChangeDetectionStrategy, ViewChild, AfterViewInit } from '@angular/core';
import { DataService, Human } from '../data.service';
import { Observable } from 'rxjs';
import { Grid, GridModel, Command } from 'ng2-qgrid';

const EXAMPLE_TAGS = [
	'select-row-disable',
	'Rows can be selected using checkboxes. Some rows are disabled'
];

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
	static tags = EXAMPLE_TAGS;
	title = EXAMPLE_TAGS[1];

	rows: Observable<Human[]>;
	gridModel: GridModel;

	constructor(dataService: DataService,
		private qgrid: Grid
	) {
		this.rows = dataService.getPeople();
		this.gridModel = qgrid.model();
	}

	ngAfterViewInit() {
		this.gridModel.selection({
			toggle: new Command({
				canExecute: ({ items }) => items.length === 1 && items[0].gender === 'male'
			})
		});
	}
}
