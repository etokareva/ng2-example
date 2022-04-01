import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, Human } from '../data.service';
import { Observable } from 'rxjs';
import { Column, StyleCellContext } from 'ng2-qgrid';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	static id = 'scroll-virtual-style';

	rows: Observable<Human[]>;

	constructor(dataService: DataService) {
		this.rows = dataService.getPeople();
	}

	styleCell(row: Human, column: Column, ctx: StyleCellContext) {
		if (column.key === 'gender') {
			ctx.class(row.gender, { color: row.gender === 'female' ? 'red' : 'blue' });
		}
	}
}
