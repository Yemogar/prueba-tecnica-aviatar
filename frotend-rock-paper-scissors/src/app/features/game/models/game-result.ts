import { WinnerOptions } from "../enums/winner-options.enum";

export interface GameResult {
    winner: WinnerOptions,
    reasonOfVictory: string
}