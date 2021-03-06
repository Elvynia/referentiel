export class TarotCard {
	index: number;
	name: string;
	description: string;
	imageUrl: string;

	constructor(index: number, name?: string, description?: string) {
		this.index = index;
		this.name = name;
		this.description = description;
	}
}
