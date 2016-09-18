import { Injectable } from '@angular/core';

@Injectable()
export class TarotCardService {
	cards = [{
	  index: 22,
	  name: 'Le Mat',
	  imageUrl: 'images/tarot-card-0.png'
  }, {
	  index: 1,
	  name: 'Le Bateleur',
	  imageUrl: 'images/tarot-card-1.png'
  }, {
	  index: 2,
	  name: 'La Papesse',
	  imageUrl: 'images/tarot-card-2.png'
  }, {
	  index: 3,
	  name: 'L\'Impératrice',
	  imageUrl: 'images/tarot-card-3.png'
  }, {
	  index: 4,
	  name: 'L\'Empereur',
	  imageUrl: 'images/tarot-card-4.png'
  }, {
	  index: 5,
	  name: 'Le Pape',
	  imageUrl: 'images/tarot-card-5.png'
  }, {
	  index: 6,
	  name: 'L\'Amoureux',
	  imageUrl: 'images/tarot-card-6.png'
  }, {
	  index: 7,
	  name: 'Le Chariot',
	  imageUrl: 'images/tarot-card-7.png'
  }, {
	  index: 8,
	  name: 'La Justice',
	  imageUrl: 'images/tarot-card-8.png'
  }, {
	  index: 9,
	  name: 'L\'Hermite',
	  imageUrl: 'images/tarot-card-9.png'
  }, {
	  index: 10,
	  name: 'La Roue de Fortune',
	  imageUrl: 'images/tarot-card-10.png'
  }, {
	  index: 11,
	  name: 'La Force',
	  imageUrl: 'images/tarot-card-11.png'
  }, {
	  index: 12,
	  name: 'Le Pendu',
	  imageUrl: 'images/tarot-card-12.png'
  }, {
	  index: 13,
	  name: 'La non nommée',
	  imageUrl: 'images/tarot-card-13.png'
  }, {
	  index: 14,
	  name: 'Temprérance',
	  imageUrl: 'images/tarot-card-14.png'
  }, {
	  index: 15,
	  name: 'Le Diable',
	  imageUrl: 'images/tarot-card-15.png'
  }, {
	  index: 16,
	  name: 'La Maison-Dieu',
	  imageUrl: 'images/tarot-card-16.png'
  }, {
	  index: 17,
	  name: 'L\'Etoile',
	  imageUrl: 'images/tarot-card-17.png'
  }, {
	  index: 18,
	  name: 'La Lune',
	  imageUrl: 'images/tarot-card-18.png'
  }, {
	  index: 19,
	  name: 'Le Soleil',
	  imageUrl: 'images/tarot-card-19.png'
  }, {
	  index: 20,
	  name: 'Le Jugement',
	  imageUrl: 'images/tarot-card-20.png'
  }, {
	  index: 21,
	  name: 'Le Monde',
	  imageUrl: 'images/tarot-card-21.png'
  }];
  
  public getCard(index: number) {
	  let result: any = null;
	  for (var i = 0; i < this.cards.length; ++i) {
		  if (this.cards[i].index === index) {
			  result = this.cards[i];
			  break;
		  }
	  }
	  return result;
  }
}