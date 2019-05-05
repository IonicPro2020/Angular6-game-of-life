import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

import { Game } from './models/game.model';

@Component({
  selector: 'app-game-of-life',
  templateUrl: './game-of-life.component.html',
  styleUrls: ['./game-of-life.component.scss']
})
export class GameOfLifeComponent implements OnInit {
  public title = 'Game of Life';
  public boardWidth: number;
  public boardheight: number;
  public game: Game;
  public gameStarted: boolean;
  public gameRunning: Observable<number>;
  public gameStateSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.game = new Game(80, 60);
    this.gameStarted = false;
    this.gameRunning = interval(20);
  }

  onClear(): void {
    this.game.clearBoard();
    this.game.generation = 0;
  }

  onCellToggle(cellIndex): void  {
    this.game.toggleCell(cellIndex);
  }

  onSetGlider(): void  {
    const gliderArray: number[] = [245, 326, 404, 405, 406];
    this.game.createShape(gliderArray);
  }

  onSetSmExp(): void  {
    const smExpArray: number[] = [1553, 1632, 1633, 1634, 1712, 1714, 1793];
    this.game.createShape(smExpArray);
  }

  gameToggle(): void  {
    if (this.gameStarted) {
      this.gameStateSubscription.unsubscribe();
    } else {
      this.gameStateSubscription = this.gameRunning.subscribe(() => {
        this.game.setNewGeneration();
      });
    }

    this.gameStarted = !this.gameStarted;
  }
}

