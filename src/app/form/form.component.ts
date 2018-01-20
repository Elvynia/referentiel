import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import * as moment from 'moment';

@Component({
	selector: 'br-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
	@Output() onGenerate: EventEmitter<any>;
	formData: any;

	constructor() {
		this.onGenerate = new EventEmitter();
		this.formData = {
			date: moment(),
			weather: moment().get('year')
		};
	}

	ngOnInit() {
	}

	generate() {
		this.onGenerate.emit({
			date: this.formData.date,
			weather: this.formData.weather
		});
	}

}
