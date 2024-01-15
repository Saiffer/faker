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
export declare class GameModule extends ModuleBase {
    gameName(): GameName;
    gameCompany(): GameCompany;
    gameRating(): GameRating;
    gameGenre(): GameGenre;
}
