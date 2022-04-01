import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../data.service';


const EXAMPLE_TAGS = [
	'persistence-with-sync-get-data',
	'Persistence plugin when rows are defined in sync manner'
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

	rows = [
		{ column1: 1, column2: 'a' },
		{ column1: 2, column2: 'b' }
	];
}
