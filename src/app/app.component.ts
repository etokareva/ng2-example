import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../data.service';

const EXAMPLE_TAGS = [
	'key-with-symbols',
	'Any row can be column key'
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

	rows = [{
		'key.With.Symbols': {
			'sub.Key.With."."': 'sub-key with dot',
			'sub.Key.With."@"': 'sub-key with "@"',
			'sub.Key.With.","': 'sub-key with ","',
			'sub.Key.With."!"': 'sub-key with "!"',
			'sub.Key.With."$"': 'sub-key with "$"',
			'sub.Key.With."?"': 'sub-key with "?"',
			'sub.Key.With."\'"': 'sub-key with "\'"',
			'sub.Key.With."^"': 'sub-key with "^"',
			'sub.Key.With.";"': 'sub-key with ";"',
			'sub.Key.With."#"': 'sub-key with "#"',
			'sub.Key.With."%"': 'sub-key with "%"'
		}
	}];
}
