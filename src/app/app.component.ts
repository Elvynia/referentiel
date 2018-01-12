import { Component } from '@angular/core';

import * as moment from 'moment';

import { HouseService } from './house.service';

@Component({
	selector: 'br-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	selectedDate: moment.Moment;
	weatherYear: number;

	constructor(private houseService: HouseService) {
		this.selectedDate = moment();
		this.weatherYear = moment().get('year');
	}

	ngOnInit() {
		this.houseService.load();
	}
}
