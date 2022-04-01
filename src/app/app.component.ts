import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Grid } from 'ng2-qgrid';
import { Observable } from 'rxjs';
import { DataService, Human } from '../data.service';

@Component({
	selector: 'example-select-row-basic',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	static id = 'select-row-range';

	gridModel = this.qgrid.model();
	rows$: Observable<Human[]> = this.dataService.getPeople();

	constructor(
		private dataService: DataService,
		private qgrid: Grid
	) {
	}
}
