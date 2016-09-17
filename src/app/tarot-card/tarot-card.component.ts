import { Component, Input, Renderer } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tarot-card',
  templateUrl: 'tarot-card.component.html',
  styleUrls: ['tarot-card.component.css']
})
export class TarotCardComponent {
  @Input() card: any;

  constructor(private renderer: Renderer) {}

  private zoom(event: MouseEvent) {
	if (event.type === 'mouseenter') {
		this.renderer.setElementClass(event.target, 'small', false);
		this.renderer.setElementClass(event.target, 'large', true);
	} else {
		this.renderer.setElementClass(event.target, 'large', false);
		this.renderer.setElementClass(event.target, 'small', true);
	}
  }
}
