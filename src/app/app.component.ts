import { Component, ChangeDetectionStrategy } from '@angular/core';

const EXAMPLE_TAGS = [
	'column-email-basic',
	'Cell value is email'
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
			'valid': 'qgrid.team@gmail.com',
			'invalid': 'Lorem ipsum dolor',
			'withLabel': 'qgrid.team@gmail.com',
			'null': null,
			'undefined': undefined,
			'empty': '',
			'customTemplate': 'qgrid.team@gmail.com'
		}
	];

	private label = 'QGRID';

	myLabel: (row: any, value?: any) => string | undefined;

	constructor() {
		const self = this;
		this.myLabel = (...args) => {
			const [_, value] = args;
			if (args.length > 1) {
				self.label = value;
				return;
			}

			return self.label;
		};
	}
}
