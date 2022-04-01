import { Component, ChangeDetectionStrategy, AfterViewInit, ViewChild } from '@angular/core';
import { DataService, Atom } from '../data.service';
import { Observable } from 'rxjs';
import { Grid, GridModel } from 'ng2-qgrid';

const EXAMPLE_TAGS = [
	'on-push-basic',
	'On push change detection is enabled'
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

	rows: Observable<Atom[]>;
	gridModel: GridModel;

	constructor(dataService: DataService,
		private qgrid: Grid
	) {
		this.gridModel = qgrid.model();
		this.rows = dataService.getAtoms();
	}

	ngAfterViewInit() {
		setTimeout(() => {
			const { rows } = this.gridModel.data();
			if (rows.length) {
				rows[0].number = rows[0].number + 1;
			}
		}, 1000);
	}
}
