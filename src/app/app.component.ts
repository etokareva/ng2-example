import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Grid, GridModel } from 'ng2-qgrid';
import { Atom, DataService } from '../data.service';
import * as fileSaver from 'file-saver';

const EXAMPLE_TAGS = [
	'export-csv',
	'Table data can be exported in csv, using UI button'
];

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
	static tags = EXAMPLE_TAGS;
	title = EXAMPLE_TAGS[1];

	rows: Observable<Atom[]>;
	gridModel: GridModel;

	constructor(dataService: DataService,
		private qgrid: Grid
	) {
		this.rows = dataService.getAtoms();
		this.gridModel = qgrid.model();
	}

	ngAfterViewInit() {
		this.gridModel.plugin({
			imports: {
				'fileSaver': fileSaver
			}
		});
	}
}
