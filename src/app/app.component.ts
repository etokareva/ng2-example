import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Atom, DataService } from '../data.service';
import { Observable, of } from 'rxjs';
import { Column } from 'ng2-qgrid';

const EXAMPLE_TAGS = [
	'grid-list-basic',
	'Grid list based on *ngFor directive'
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

	models: Array<{ columns: Array<Column>, rows$: Observable<Atom[]> }> = [{
		columns: [{
			key: 'number',
			title: 'Number'
		}, {
			key: 'name',
			title: 'Name'
		}],
		rows$: this.dataService.getAtoms()
	}];

	constructor(private dataService: DataService) {
	}
}
