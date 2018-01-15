import { Component, Input } from '@angular/core';

import { House } from '../house';
import { HouseService } from '../house.service';
import { TarotCard } from '../card';
import { RepositoryService } from '../repository.service';

@Component({
	selector: 'br-house',
	templateUrl: './house.component.html',
	styleUrls: ['./house.component.css']
})
export class HouseComponent {
	@Input() id: number;
	house: House;
	card: TarotCard;

	constructor(private houseService: HouseService,
		private repositoryService: RepositoryService) {}

	ngOnInit() {
		this.houseService.list.subscribe((houses: Array<House>) => {
			this.house = houses.find((house: House) => house.id === this.id);
		});
		this.repositoryService.events.subscribe((repo) => {
			this.card = repo[this.id];
		});
	}
}
