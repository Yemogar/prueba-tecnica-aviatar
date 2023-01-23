import { GameOptions } from "../enums/game-options.enum";
import { WinnerOptions } from "../enums/winner-options.enum";

export interface GameResult {
    winner?: WinnerOptions,
    reasonOfVictory?: string,
    optionSelectedByPlayer?: GameOptions,
    optionSelectedByComputer?: GameOptions
    playerUsername?: string
}