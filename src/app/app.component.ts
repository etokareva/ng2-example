import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../data.service';
import { GridModel, Grid } from 'ng2-qgrid';

const EXAMPLE_TAGS = [
	'index-column-model',
	'Columns are ordered (grid-model)'
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

	gridModel: GridModel;

	constructor(dataService: DataService, qgrid: Grid) {
		this.gridModel = qgrid.model();

		dataService
			.getAtoms()
			.subscribe(rows => {
				this.gridModel.data({
					rows,
					columns: [
						{
							key: 'source',
							title: '[3]Wiki',
							type: 'url'
						},
						{
							key: 'symbol',
							title: '[1]Symbol',
							index: 1
						},
						{
							key: 'name',
							title: '[2]Name',
							index: 2
						},
						{
							key: 'number',
							title: '[0]Number',
							index: 0
						}
					]
				});
			});
	}
}
