import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../data.service';
import { GridModel, Grid } from 'ng2-qgrid';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	static id = 'look-people-model';

	gridModel: GridModel = this.qgrid
		.model()
		.columnList({
			generation: 'deep'
		});

	constructor(dataService: DataService, private qgrid: Grid) {
		dataService
			.getPeople()
			.subscribe(rows => this.gridModel.data({ rows }));
	}
}
