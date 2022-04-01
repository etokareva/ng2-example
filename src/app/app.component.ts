import { Component, ChangeDetectionStrategy } from '@angular/core';
import { VscrollService } from 'ng2-qgrid';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	static id = 'scroll-virtual-list';

	context = this.vscroll.context({ threshold: 50 });
	items = Array.from(Array(100).keys());

	constructor(private vscroll: VscrollService) {
	}

	reset() {
		this.context.container.reset();
	}

	addItems(count: number) {
		const newItems = Array.from(Array(count).keys()).map(x => x + this.items.length);
		this.items = this.items.concat(newItems);
	}

	removeItems(count: number) {
		this.items = this.items.slice(0, Math.max(0, this.items.length - count));
	}

	clear() {
		this.items = [];
	}
}
