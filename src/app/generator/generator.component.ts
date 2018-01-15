import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

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

	constructor(private repositoryService: RepositoryService) {}

	ngOnChanges(changes: SimpleChanges) {
		if (this.date && this.weather && (changes.date || changes.weather)) {
			this.reload();
		}
	}

	reload() {
		// Reload birth repository cards with new informations.
		console.debug('Reloading repository on %s with weather to %s.', this.date.toISOString(), this.weather);
		this.repositoryService.calculate(this.date, this.weather);
	}

}
