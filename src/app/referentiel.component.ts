import { Component } from '@angular/core';
import { TarotCardComponent } from './tarot-card/tarot-card.component';

@Component({
  moduleId: module.id,
  selector: 'referentiel-app',
  templateUrl: 'referentiel.component.html',
  styleUrls: ['referentiel.component.css'],
  directives: [TarotCardComponent]
})
export class ReferentielAppComponent {
  title = 'Calculez votre référentiel de naissance !';
  cards = [{
	  name: 'Le Mat',
	  imageUrl: '/images/tarot-card-0.png'
  }, {
	  name: 'Le Bateleur',
	  imageUrl: '/images/tarot-card-1.png'
  }, {
	  name: 'La Papesse',
	  imageUrl: '/images/tarot-card-2.png'
  }, {
	  name: 'L\'Impératrice',
	  imageUrl: '/images/tarot-card-3.png'
  }, {
	  name: 'L\'Empereur',
	  imageUrl: '/images/tarot-card-4.png'
  }, {
	  name: 'Le Pape',
	  imageUrl: '/images/tarot-card-5.png'
  }, {
	  name: 'L\'Amoureux',
	  imageUrl: '/images/tarot-card-6.png'
  }, {
	  name: 'Le Chariot',
	  imageUrl: '/images/tarot-card-7.png'
  }, {
	  name: 'La Justice',
	  imageUrl: '/images/tarot-card-8.png'
  }, {
	  name: 'L\'Hermite',
	  imageUrl: '/images/tarot-card-9.png'
  }, {
	  name: 'La Roue de Fortune',
	  imageUrl: '/images/tarot-card-10.png'
  }, {
	  name: 'La Force',
	  imageUrl: '/images/tarot-card-11.png'
  }, {
	  name: 'Le Pendu',
	  imageUrl: '/images/tarot-card-12.png'
  }, {
	  name: 'La non nommée',
	  imageUrl: '/images/tarot-card-13.png'
  }, {
	  name: 'Temprérance',
	  imageUrl: '/images/tarot-card-14.png'
  }, {
	  name: 'Le Diable',
	  imageUrl: '/images/tarot-card-15.png'
  }, {
	  name: 'La Maison-Dieu',
	  imageUrl: '/images/tarot-card-16.png'
  }, {
	  name: 'L\'Etoile',
	  imageUrl: '/images/tarot-card-17.png'
  }, {
	  name: 'La Lune',
	  imageUrl: '/images/tarot-card-18.png'
  }, {
	  name: 'Le Soleil',
	  imageUrl: '/images/tarot-card-19.png'
  }, {
	  name: 'Le Jugement',
	  imageUrl: '/images/tarot-card-20.png'
  }, {
	  name: 'Le Monde',
	  imageUrl: '/images/tarot-card-21.png'
  }];
}
