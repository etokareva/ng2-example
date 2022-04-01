import { Component, ChangeDetectionStrategy } from '@angular/core';

const EXAMPLE_TAGS = [
	'column-datetime-basic',
	'Cell value is date and time'
];

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleColumnDateTimeBasicComponent {
	static tags = EXAMPLE_TAGS;
	title = EXAMPLE_TAGS[1];

	rows = [
		{
			'number': 100.12,
			'bool': true,
			'date': new Date(2018, 9, 12, 12, 30, 0),
			'null': null,
			'undefined': undefined,
			'empty': '',
			'text': '2018/3/28',
			'maxLength2': 'PI',
			'format': new Date(2018, 9, 12, 1, 25, 0),
			'customTemplate': new Date(2018, 13, 33)
		}
	];
}
