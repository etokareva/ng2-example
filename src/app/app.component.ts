import { Component, ChangeDetectionStrategy } from '@angular/core';

const EXAMPLE_TAGS = [
	'copy-value-from-cell',
	'Value from cell can be copied by ctrl+c'
];

@Component({
	selector: 'my-app',
	templateUrl: './example-copy-value-from-cell.component.html',
	styleUrls: ['./example-copy-value-from-cell.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	static tags = EXAMPLE_TAGS;
	title = EXAMPLE_TAGS[1];

	rows = [
		{
			'dollar': 0,
			'euro': 200,
		}
	];
}
