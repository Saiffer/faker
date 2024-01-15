import { ModuleBase } from '../../internal/module-base';

export interface Game {
  readonly game: string;
  readonly genre: string;
  readonly rating: string;
  readonly company: string;
}

export interface GameName {
  readonly gameName: string[];
}

export interface GameCompany {
  readonly gameCompany: string[];
}

export interface GameGenre {
  readonly gameGenre: string[];
}

export interface GameRating {
  readonly gameRating: string[];
}

export class GameModule extends ModuleBase {
  gameName(): GameName {
    return this.faker.helpers.arrayElement(
      this.faker.definitions.game.gameName
    );
  }

  gameCompany(): GameCompany {
    return this.faker.helpers.arrayElement(
      this.faker.definitions.game.gameCompany
    );
  }

  gameRating(): GameRating {
    return this.faker.helpers.arrayElement(
      this.faker.definitions.game.gameRating
    );
  }

  gameGenre(): GameGenre {
    return this.faker.helpers.arrayElement(
      this.faker.definitions.game.gameGenre
    );
  }
}
