import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, Atom } from '../data.service';
import { Observable } from 'rxjs';
import { PersistenceStorage } from 'ng2-qgrid';

const EXAMPLE_TAGS = [
	'persistence-on-state-change',
	'Grid state is saved on model change'
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

	rows$: Observable<Atom[]>;

	storage = new PersistenceStorage(sessionStorage);

	constructor(dataService: DataService) {
		this.rows$ = dataService.getAtoms();
	}
}
