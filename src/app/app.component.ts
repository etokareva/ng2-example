import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, Atom } from '../data.service';
import { Observable } from 'rxjs';
import { GridModel } from 'ng2-qgrid';

const EXAMPLE_TAGS = [
	'action-bar-template',
	'Data can be sorted using the buttons'
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

	constructor(private dataService: DataService) {
		this.rows = dataService.getAtoms();
	}

	sortBySymbol(gridModel: GridModel, dir: string) {
		gridModel.sort({ by: [`${dir}symbol`] });
	}
}
