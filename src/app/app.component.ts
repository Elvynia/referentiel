import { Component } from '@angular/core';

import * as moment from 'moment';

import { HouseService } from './house.service';
import { CardService } from './card.service';

@Component({
	selector: 'br-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	formData: any;
	selectedDate: moment.Moment;
	weatherYear: number;

	constructor(private houseService: HouseService,
		private cardService: CardService) {
		this.formData = {
			date: moment(),
			weather: moment().get('year')
		};
	}

	ngOnInit() {
		this.houseService.load();
		this.cardService.load();
	}

	generate() {
		this.selectedDate = this.formData.date;
		this.weatherYear = this.formData.weather;
	}
}
