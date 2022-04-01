import { Component, ChangeDetectionStrategy } from '@angular/core';

const EXAMPLE_TAGS = [
	'column-image-basic',
	'Cell value contains uploaded image'
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
			'valid': 'https://rawgit.com/qgrid/doc/master/themes/qgrid/source/assets/favicons/android-chrome-192x192.png',
			'invalid': 'Lorem ipsum dolor',
			'withLabel': 'https://rawgit.com/qgrid/doc/master/themes/qgrid/source/assets/favicons/android-chrome-512x512.png',
			'empty': '',
			'customTemplate': 'https://rawgit.com/qgrid/doc/master/themes/qgrid/source/assets/favicons/favicon-32x32.png'
		}
	];
}
