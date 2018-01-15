import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';

import { TarotCard } from './card';

@Injectable()
export class CardService {
	private subject: BehaviorSubject<Array<TarotCard>>;

	constructor(private httpClient: HttpClient) {
		this.subject = new BehaviorSubject<Array<TarotCard>>([]);
	}

	public get list(): Observable<Array<TarotCard>> {
		return this.subject.asObservable();
	}

	public load() {
		this.httpClient.get('/assets/cards.json')
			.subscribe((houses: Array<TarotCard>) => this.subject.next(houses));
	}
}
