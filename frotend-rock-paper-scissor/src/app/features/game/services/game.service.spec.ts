import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { GameOptions } from '../enums/game-options.enum';
import { WinnerOptions } from '../enums/winner-options.enum';
import { GameResult } from '../models/game-result';

import { GameService } from './game.service';

describe('GameService', () => {
  let service: GameService;
  let httpClientSpy: jasmine.SpyObj<HttpClient> = jasmine.createSpyObj('HttpClient', ['post']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        {
          provide: HttpClient,
          useValue: httpClientSpy
        }
      ]
    });
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#playRockPaperScissors should return faked value from a fake inputs', () => {
    const fakeResult: GameResult = {
      optionSelectedByPlayer: GameOptions.Rock,
      optionSelectedByComputer: GameOptions.Paper,
      winner: WinnerOptions.Computer,
      reasonOfVictory: 'Paper beats Rock'
    }

    expect(service.playRockPaperScissors(GameOptions.Rock, GameOptions.Paper))
      .toEqual(fakeResult);
  });

  it('#getOptionSelectedByComputer should return a random value between GameOptions values', () => {
    const gameOptionsValues: string[] = Object.values(GameOptions);
    const optionSelectedByComputer: GameOptions = service.getOptionSelectedByComputer();

    expect(gameOptionsValues.indexOf(optionSelectedByComputer)).not.toBe(-1);
  });

  it('#increasePlayerScoreboard should plus 1 to the player scoreboard', (done: DoneFn) => {
    service.increasePlayerScoreboard();
    service.gameScoreboard$
      .subscribe(scoreboard => {
        expect(scoreboard.playerPoints).toBe(1);
        done();
      });
  });

  it('#increaseComputerScoreboard should plus 1 to the computer scoreboard', (done: DoneFn) => {
    service.increaseComputerScoreboard();
    service.gameScoreboard$
      .subscribe(scoreboard => {
        expect(scoreboard.computerPoints).toBe(1);
        done();
      });
  });

  it('#resetScoreboard should reset to 0 the computer and user scoreboard', (done: DoneFn) => {
    service.resetScoreboard();
    service.gameScoreboard$
      .subscribe(scoreboard => {
        expect(scoreboard.computerPoints + scoreboard.playerPoints).toBe(0);
        done();
      });
  });

  it('#saveGameResult should save the game result and return the saved result', (done: DoneFn) => {
    const fakeResult: GameResult = {
      optionSelectedByPlayer: GameOptions.Rock,
      optionSelectedByComputer: GameOptions.Paper,
      winner: WinnerOptions.Computer,
      reasonOfVictory: 'Paper beats Rock'
    }

    httpClientSpy.post.and.returnValue(of(
      {
        playerUsername: '',
        ...fakeResult
      }
    ));

    service.saveGameResult(fakeResult)
      .subscribe(gameResult => {
        expect(gameResult).toEqual({
          playerUsername: '',
          ...fakeResult
        });
        done();
      });
  });

});
