import { GameCompany, GameGenre, GameName, GameRating } from '../modules/game';
import { LocaleEntry } from './definitions';
/**
 * The possible definitions related to games.
 */
export type GameDefinition = LocaleEntry<{
    /**
     * Name of the game.
     */
    gameName: GameName[];
    /**
     * Genre of the game.
     */
    gameGenre: GameGenre[];
    /**
     * Rating of the game.
     */
    gameRating: GameRating[];
    /**
     * Company of the game.
     */
    gameCompany: GameCompany[];
}>;
