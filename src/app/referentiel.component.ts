import { Component, Renderer, ViewChild, ElementRef } from '@angular/core';
import { BirthRepositoryComponent } from './birth-repository/birth-repository.component';
import { TarotCardComponent } from './tarot-card/tarot-card.component';
import { TarotCardService } from './tarot-card/tarot-card.service';

@Component({
  moduleId: module.id,
  selector: 'referentiel-app',
  templateUrl: 'referentiel.component.html',
  styleUrls: ['referentiel.component.css'],
  directives: [BirthRepositoryComponent, TarotCardComponent],
  providers: [TarotCardService]
})
export class ReferentielAppComponent {
  title = 'Calculez votre référentiel de naissance !';
  display: any;
  selectedDate: string;
  weatherYear: number;
  dateValid: boolean;
  @ViewChild('date')
  date: ElementRef;
  
  constructor(private renderer: Renderer, private cardService: TarotCardService) {
	this.dateValid = false;
	this.display = 1;
	this.weatherYear = 2016;
  }
  
  private updateBirthDate() {
	let test = null;
	try {
		test = new Date(this.date.nativeElement.value);
	} finally {
		if (test && this.date.nativeElement.value !== '') {
			this.dateValid = true;
			this.selectedDate = this.date.nativeElement.value;
		} else {
			this.dateValid = false;
			this.selectedDate = null;
		}
	}
  }
  
  private showControls(event: MouseEvent) {
	this.renderer.setElementStyle(event.target, 'opacity', '1');
	this.renderer.setElementStyle(event.target, 'border', '1px solid black');
  }
  
  private hideControls(event: MouseEvent) {
	this.renderer.setElementStyle(event.target, 'opacity', '0.2');
	this.renderer.setElementStyle(event.target, 'border', 'none');
  }
}
