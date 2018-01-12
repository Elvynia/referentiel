import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';

import { House } from './house';

@Injectable()
export class HouseService {
	private subject: BehaviorSubject<Array<House>>;

	constructor(private httpClient: HttpClient) {
		this.subject = new BehaviorSubject<Array<House>>([]);
	}

	public get list(): Observable<Array<House>> {
		return this.subject.asObservable();
	}

	public load() {
		this.httpClient.get('/assets/houses.json')
			.subscribe((houses: Array<House>) => this.subject.next(houses));
	}

}
