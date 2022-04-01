import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { VscrollContext, VscrollService } from 'ng2-qgrid';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	static id = 'scroll-virtual-list-infinite';

	context = this.vscroll.context({
		threshold: 50,
		fetch: (skip, take, d) => {
			const length = skip + take;
			const data = Array.from(Array(length).keys());
			const wnd = data.slice(skip, length);

			this.items.push(...wnd);
			d.resolve(length + take);
		}
	});

	items = [];

	constructor(private vscroll: VscrollService) {
	}

	reset() {
		this.items = [];
		this.context.container.reset();
	}
}
