import { Injectable } from '@angular/core';

import * as moment from 'moment';
import { BehaviorSubject, Observable } from 'rxjs';

import { Repository } from './repository';
import { TarotCard } from './card';
import { CardService } from './card.service';

@Injectable()
export class RepositoryService {
	private repository: BehaviorSubject<Repository>;
	private cards: Array<TarotCard>;

	constructor(cardService: CardService) {
		this.repository = new BehaviorSubject(new Repository());
		cardService.list.subscribe((cards: Array<TarotCard>) => this.cards = cards);
	}

	public get events(): Observable<Repository> {
		return this.repository.asObservable();
	}

	private toCard(index: number): TarotCard {
		return this.cards.find((card: TarotCard) => card.index === index);
	}

	private reduce(value: number, max: number, exceptions: Array<number>): number {
		while(value > max && exceptions.indexOf(value) < 0) {
			let tmp: string = value.toString();
			value = 0;
			for (var i = 0; i < tmp.length; ++i) {
				value += Number(tmp[i]);
			}
		}
		if (value === 0) {
			value = 22;
		}
		return value;
	}

	public calculate(birthDate: moment.Moment, weatherYear: number) {
		let repo: Repository = new Repository();
		let day = birthDate.date();
		let month = birthDate.month() + 1;
		let year = birthDate.year();
		this.calculateM1(repo, day);
		this.calculateM2(repo, month);
		this.calculateM3(repo, year);
		this.calculateM4(repo, day, month, year);
		this.calculateM5(repo);
		this.calculateM6(repo);
		this.calculateM7(repo);
		this.calculateM9(repo);
		this.calculateM10(repo);
		this.calculateM11(repo);
		this.calculateM12(repo);
		this.calculateM13(repo);
		this.repository.next(repo);
	}

	private calculateM1(repo: Repository, day: number) {
		repo[1] = this.toCard(this.reduce(day, 22, []));
	}

	private calculateM2(repo: Repository, month: number) {
		repo[2] = this.toCard(month);
	}

	private calculateM3(repo: Repository, year: number) {
		repo[3] = this.toCard(this.reduce(year, 22, []));
	}

	private calculateM4(repo: Repository, day: number, month: number, year: number) {
		let result: number = day + month + year;
		repo[4] = this.toCard(this.reduce(result, 22, []));
	}

	private calculateM5(repo: Repository) {
		let result: number = repo[1].index + repo[2].index + repo[3].index + repo[4].index;
		repo[5] = this.toCard(this.reduce(result, 22, []));
	}

	private calculateM6(repo: Repository) {
		let result: number = repo[1].index + repo[2].index;
		repo[6] = this.toCard(this.reduce(result, 22, []));
	}

	private calculateM7(repo: Repository) {
		let m2 = repo[2].index;
		let m3 = repo[3].index;
		let result: number = 0;
		if (m2 > m3) {
			result = m2 - m3;
		} else {
			result = m3 - m2;
		}
		repo[7] = this.toCard(this.reduce(result, 22, []));
	}

	private calculateM8(repo: Repository, weatherYear: number) {
		let result = repo[6].index + this.reduce(weatherYear, 9, [11, 22]);
		repo[8] = this.toCard(this.reduce(result, 22, []));
	}

	private calculateM9(repo: Repository) {
		let result: number = repo[6].index + repo[7].index;
		repo[9] = this.toCard(this.reduce(result, 22, []));
	}

	private calculateM10(repo: Repository) {
		let result: number = 22 - repo[9].index;
		repo[10] = this.toCard(this.reduce(result, 22, []));
	}

	private calculateM11(repo: Repository) {
		let result: number = repo[7].index + repo[3].index + repo[10].index;
		repo[11] = this.toCard(this.reduce(result, 22, []));
	}

	private calculateM12(repo: Repository) {
		let result: number = repo[6].index + repo[2].index + repo[4].index;
		repo[12] = this.toCard(this.reduce(result, 22, []));
	}

	private calculateM13(repo: Repository) {
		let resultA: number = repo[9].index + repo[2].index + repo[5].index + repo[6].index;
		let resultB: number = repo[11].index + repo[3].index + repo[5].index + repo[1].index + repo[12].index;
		repo[13] = this.toCard(this.reduce(resultA + resultB, 22, []));
	}
}
