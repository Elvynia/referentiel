import { Injectable } from '@angular/core';

@Injectable()
export class BirthRepositoryService {
	houses = [{
	  index: 1,
	  title: 'Maison de la personalité',
	  description: '',
	  cardIndex: -1
  }, {
	  index: 2,
	  title: 'Maison de la quête',
	  description: '',
	  cardIndex: -1
  }, {
	  index: 3,
	  title: 'Maison de la pensée, siège des désirs et des peurs',
	  description: '',
	  cardIndex: -1
  }, {
	  index: 4,
	  title: 'Maison de l\'action, siège de la mission existentielle',
	  description: '',
	  cardIndex: -1
  }, {
	  index: 5,
	  title: 'Maison du passage obligé. &#171; La croisée des chemins &#187;',
	  description: '',
	  cardIndex: -1
  }, {
	  index: 6,
	  title: 'Maison des ressources',
	  description: '',
	  cardIndex: -1
  }, {
	  index: 7,
	  title: 'Maison des défis',
	  description: '',
	  cardIndex: -1
  }, {
	  index: 8,
	  title: 'Maison des transformations: La Météo',
	  description: '',
	  cardIndex: -1
  }, {
	  index: 9,
	  title: 'Maison du soi, Maison de la réussite',
	  description: '',
	  cardIndex: -1
  }, {
	  index: 10,
	  title: 'Maison des échecs et des expériences',
	  description: '',
	  cardIndex: -1
  }, {
	  index: 11,
	  title: 'Capteur-enregistreur des mémoires du sujet',
	  description: '',
	  cardIndex: -1
  }, {
	  index: 12,
	  title: 'Valeur Personnelle de Transimission (VPT)',
	  description: '',
	  cardIndex: -1
  }, {
	  index: 13,
	  title: 'Maison du paradoxe dite &#171; Coeur de blason &#187;',
	  description: '',
	  cardIndex: -1
  }];
  
  public calculate(birthDate: string) {
	let dateParts = birthDate.split('-');
	this.calculateM1(dateParts[2]);
	this.calculateM2(dateParts[1]);
	this.calculateM3(dateParts[0]);
	this.calculateM4(dateParts[2], dateParts[1], dateParts[0]);
	this.calculateM5();
	this.calculateM6();
	this.calculateM7();
	this.calculateM9();
	this.calculateM10();
	this.calculateM11();
	this.calculateM12();
	this.calculateM13();
  }
  
  public recalculateM8(weatherYear: number) {
	  if (this.houses[5].cardIndex > 0) {
	    this.calculateM8(weatherYear);
	  }
  }
  
  reduce(value: string, max: number, exceptions: Array<number>): number {
	  let result: number = Number(value);
	  while(result > max && exceptions.indexOf(result) < 0) {
		  let tmp: string = result.toString();
		  result = 0;
		  for (var i = 0; i < tmp.length; ++i) {
			  result += Number(tmp[i]);
		  }
	  }
	  if (result === 0) {
		  result = 22;
	  }
	  return result;
  }
  
  private calculateM1(day: string) {
	this.houses[0].cardIndex = this.reduce(day, 22, []);
  }
  
  private calculateM2(month: string) {
	  this.houses[1].cardIndex = Number(month);
  }
  
  private calculateM3(year: string) {
	  this.houses[2].cardIndex = this.reduce(year, 22, []);
  }
  
  private calculateM4(day: string, month: string, year: string) {
	  let result: number = Number(day) + Number(month) + Number(year);
	  this.houses[3].cardIndex = this.reduce(result.toString(), 22, []);
  }
  
  private calculateM5() {
	  let result: number = this.houses[0].cardIndex + this.houses[1].cardIndex
		+ this.houses[2].cardIndex + this.houses[3].cardIndex;
	  this.houses[4].cardIndex = this.reduce(result.toString(), 22, []);
  }
  
  private calculateM6() {
	  let result: number = this.houses[0].cardIndex + this.houses[1].cardIndex;
	  this.houses[5].cardIndex = this.reduce(result.toString(), 22, []);
  }
  
  private calculateM7() {
	  let m2 = this.houses[1].cardIndex;
	  let m3 = this.houses[2].cardIndex;
	  let result: number = 0;
	  if (m2 > m3) {
		result = m2 - m3;
	  } else {
		result = m3 - m2;
	  }
	  this.houses[6].cardIndex = this.reduce(result.toString(), 22, []);
  }
  
  private calculateM8(weatherYear: number) {
	  let result = this.houses[5].cardIndex + this.reduce(weatherYear.toString(), 9, [11, 22]);
	  this.houses[7].cardIndex = this.reduce(result.toString(), 22, []);
  }
  
  private calculateM9() {
	  let result: number = this.houses[5].cardIndex + this.houses[6].cardIndex;
	  this.houses[8].cardIndex = this.reduce(result.toString(), 22, []);
  }
  
  private calculateM10() {
	  let result: number = 22 - this.houses[8].cardIndex;
	  this.houses[9].cardIndex = this.reduce(result.toString(), 22, []);
  }
  
  private calculateM11() {
	  let result: number = this.houses[6].cardIndex + this.houses[2].cardIndex + this.houses[9].cardIndex;
	  this.houses[10].cardIndex = this.reduce(result.toString(), 22, []);
  }
  
  private calculateM12() {
	  let result: number = this.houses[5].cardIndex + this.houses[1].cardIndex + this.houses[3].cardIndex;
	  this.houses[11].cardIndex = this.reduce(result.toString(), 22, []);
  }
  
  private calculateM13() {
	  let resultA: number = this.houses[8].cardIndex + this.houses[1].cardIndex + this.houses[4].cardIndex + this.houses[3].cardIndex;
	  let resultB: number = this.houses[10].cardIndex + this.houses[2].cardIndex + this.houses[4].cardIndex + this.houses[0].cardIndex + this.houses[11].cardIndex;
	  this.houses[12].cardIndex = this.reduce((resultA + resultB).toString(), 22, []);
  }
}