import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation, OnDestroy } from '@angular/core';
import { DataService, Atom } from '../data.service';
import { Observable } from 'rxjs';

const EXAMPLE_TAGS = [
	'live-rows',
	'Grid actions are animated (e.g. row sorting)'
];

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class AppComponent {
	static tags = EXAMPLE_TAGS;
	title = EXAMPLE_TAGS[1];

	rows: Observable<Atom[]>;

	constructor(private dataService: DataService) {
		this.rows = dataService.getAtoms();
	}
}
