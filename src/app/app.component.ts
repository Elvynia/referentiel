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
	selectedDate: moment.Moment;
	weatherYear: number;
	selectedCard: TarotCard;

	constructor(private houseService: HouseService,
		private cardService: CardService) { }

	ngOnInit() {
		this.houseService.load();
		this.cardService.load();
	}

	selectCard(card: TarotCard) {
		this.selectedCard = card;
	}

	generate(data: any) {
		this.selectedDate = data.date;
		this.weatherYear = data.weather;
	}
}
