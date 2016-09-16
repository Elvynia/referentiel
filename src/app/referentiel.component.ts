import { Component, Renderer, ViewChild } from '@angular/core';
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
  weatherYear: number;
  _selectedDate: any;
  
  set selectedDate(e){
    e = e.split('-');
    let d = new Date(Date.UTC(e[0], e[1]-1, e[2]));
    this._selectedDate.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + 1);
  }

  get selectedDate(){
    return this._selectedDate.toISOString().substring(0, 10);
  }
  
  constructor(private renderer: Renderer, private cardService: TarotCardService) {
	this._selectedDate = new Date('1990-12-19');
	this.display = 1;
	this.weatherYear = 2016;
  }
  
  private updateTransparency(event: MouseEvent) {
	  if (event.type === 'mouseenter') {
		this.renderer.setElementStyle(event.target, 'opacity', '1');
		this.renderer.setElementStyle(event.target, 'border', '1px solid black');
	  } else {
		this.renderer.setElementStyle(event.target, 'opacity', '0.2');
		this.renderer.setElementStyle(event.target, 'border', 'none');
	  }
  }
}
