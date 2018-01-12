import { Component, Input } from '@angular/core';

import * as moment from 'moment';

@Component({
	selector: 'br-generator',
	templateUrl: './generator.component.html',
	styleUrls: ['./generator.component.css']
})
export class GeneratorComponent {
	@Input() date: moment.Moment;
	@Input() weather: number;

	constructor() { }

}
