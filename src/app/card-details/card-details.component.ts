import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

import { TarotCard } from '../card';

@Component({
	selector: 'br-card-details',
	templateUrl: './card-details.component.html',
	styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
	@Input('for') card: TarotCard;

	constructor() { }

	ngOnInit() {
	}

}
