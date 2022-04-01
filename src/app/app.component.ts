import { Component, ChangeDetectionStrategy } from '@angular/core';

const EXAMPLE_TAGS = [
	'column-date-basic',
	'Cell value is date'
];

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	static tags = EXAMPLE_TAGS;
	title = EXAMPLE_TAGS[1];

	rows = [
		{
			'number': 100.12,
			'bool': true,
			'date': new Date(2018, 9, 12),
			'arr': [new Date(2020, 9, 12), new Date(2020, 9, 10), new Date(2020, 10, 12), new Date(2020, 9, 12)],
			'null': null,
			'undefined': undefined,
			'empty': '',
			'text': '2018/3/28',
			'maxLength2': 'PI',
			'format': new Date(2018, 9, 12),
			'customTemplate': new Date(2018, 9, 12)
		}
	];
}
