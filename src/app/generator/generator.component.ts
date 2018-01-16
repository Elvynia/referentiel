import { Component, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

import * as moment from 'moment';

import { TarotCard } from '../card';
import { RepositoryService } from '../repository.service';

@Component({
	selector: 'br-generator',
	templateUrl: './generator.component.html',
	styleUrls: ['./generator.component.css']
})
export class GeneratorComponent {
	@Input() date: moment.Moment;
	@Input() weather: number;
	@Output() onSelect: EventEmitter<TarotCard>;
	ready: boolean;

	constructor(private repositoryService: RepositoryService) {
		this.onSelect = new EventEmitter();
		this.ready = false;
	}

	ngOnChanges(changes: SimpleChanges) {
		if (this.date && this.weather && (changes.date || changes.weather)) {
			this.reload();
		}
	}

	reload() {
		// Reload birth repository cards with new informations.
		console.debug('Reloading repository on %s with weather to %s.', this.date.toLocaleString(), this.weather);
		this.repositoryService.calculate(this.date, this.weather);
		this.ready = true;
	}

	select(houseId: number) {
		this.onSelect.next(this.repositoryService.current[houseId]);
	}

}
