import { Component, Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tarot-card',
  templateUrl: 'tarot-card.component.html',
  styleUrls: ['tarot-card.component.css']
})
export class TarotCardComponent implements OnInit {
	@Input() card: any;

  constructor() {}

  ngOnInit() {
  }

}
