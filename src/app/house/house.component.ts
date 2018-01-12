import { Component, Input } from '@angular/core';

import { Tarot } from '../tarot';
import { House } from '../house';
import { HouseService } from '../house.service';
import { TarotCard } from '../tarot-card';

@Component({
	selector: 'br-house',
	templateUrl: './house.component.html',
	styleUrls: ['./house.component.css']
})
export class HouseComponent {
	@Input() id: number;
	@Input() card: TarotCard;
	house: House;

	constructor(private houseService: HouseService) {}

	ngOnInit() {
		this.houseService.list.subscribe((houses: Array<House>) => {
			this.house = houses.find((house: House) => house.id === this.id);
		});
	}
}
