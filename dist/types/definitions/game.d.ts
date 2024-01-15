import { GameCompany, GameGenre, GameName, GameRating } from "../modules/game";
import { LocaleEntry } from "./definitions";
export type GameDefinition = LocaleEntry<{
    gameName: GameName[];
    gameGenre: GameGenre[];
    gameRating: GameRating[];
    gameCompany: GameCompany[];
}>;
