import { Component, ViewChild, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { Atom, DataService } from '../data.service';
import { Grid, GridModel } from 'ng2-qgrid';
import { Observable } from 'rxjs';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
	static id = 'scroll-virtual-infinite';

	rows: Observable<Atom[]>;
	gridModel: GridModel;

	constructor(private dataService: DataService,
		private qgrid: Grid
	) {
		this.gridModel = qgrid.model();
	}

	ngAfterViewInit() {
		this.gridModel.data({
			pipe: [
				(rows, context, next) => {
					const { skip } = this.gridModel.fetch();
					const { size } = this.gridModel.pagination();

					this.dataService
						.getAtoms()
						.subscribe(atoms => {
							const newPage = atoms.slice(skip, skip + size);
							next(rows.concat(newPage));
						});

				}].concat(this.qgrid.pipeUnit.view)
		});
	}
}
