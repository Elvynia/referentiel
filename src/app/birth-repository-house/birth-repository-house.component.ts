import { Component, Input } from '@angular/core';

import { TarotCardComponent } from '../tarot-card/tarot-card.component';
import { TarotCardService } from '../tarot-card/tarot-card.service';

@Component({
  moduleId: module.id,
  selector: 'birth-repository-house',
  templateUrl: 'birth-repository-house.component.html',
  styleUrls: ['birth-repository-house.component.css'],
  directives: [TarotCardComponent]
})
export class BirthRepositoryHouseComponent {
  @Input() house: any;

  constructor(private cardService: TarotCardService) {}

  private get card() {
	  if (this.house.cardIndex > -1) {
		return this.cardService.getCard(this.house.cardIndex);
	  } else {
		return null;
	  }
  }

}
