import { Component, OnChanges, Input } from '@angular/core';

import { BirthRepositoryHouseComponent } from '../birth-repository-house/birth-repository-house.component';
import { BirthRepositoryService } from './birth-repository.service';
import { TarotCardService } from '../tarot-card/tarot-card.service';

@Component({
  moduleId: module.id,
  selector: 'birth-repository',
  templateUrl: 'birth-repository.component.html',
  styleUrls: ['birth-repository.component.css'],
  directives: [BirthRepositoryHouseComponent],
  providers: [BirthRepositoryService]
})
export class BirthRepositoryComponent implements OnChanges {
  @Input() birthDate: string;
  @Input() weatherYear: number;
  toReduce: number;
  reduced: number;
  
  public get houses() {
	  return this.repositoryService.houses;
  }

  constructor(private cardService: TarotCardService, private repositoryService: BirthRepositoryService) {
  }

  ngOnChanges() {
	  if (this.birthDate) {
		this.repositoryService.calculate(this.birthDate);
	  }
	  if (this.weatherYear) {
		this.repositoryService.recalculateM8(this.weatherYear);
	  }
  }
}
