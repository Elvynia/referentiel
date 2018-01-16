import { Component } from '@angular/core';

import * as moment from 'moment';

import { HouseService } from './house.service';
import { CardService } from './card.service';
import { TarotCard } from './card';

@Component({
	selector: 'br-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	formData: any;
	selectedDate: moment.Moment;
	weatherYear: number;
	selectedCard: TarotCard;

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

	selectCard(card: TarotCard) {
		this.selectedCard = card;
	}
}
