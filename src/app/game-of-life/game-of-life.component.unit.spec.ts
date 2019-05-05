import { interval, Observable, of} from 'rxjs';

import { fakeAsync, tick } from '@angular/core/testing';

import { GameOfLifeComponent } from './game-of-life.component';
import { Game } from './models/game.model';

describe('GameOfLifeComponent', () => {
    let component: GameOfLifeComponent;

    beforeEach(() => {
        component = new GameOfLifeComponent;
        component.game = new Game(1, 1);
        component.gameRunning = interval(1);
        component.gameStarted = false;
    });

    it('onClear() should call game.clearBoard()', () => {
        spyOn(component.game, 'clearBoard');

        component.onClear();

        expect(component.game.clearBoard).toHaveBeenCalled();

    });

    it('onCellToggle() should call game.toggleCell()', () => {
        spyOn(component.game, 'toggleCell');

        component.onCellToggle(1);

        expect(component.game.toggleCell).toHaveBeenCalledWith(1);

    });

    it('onSetGlider() should call game.createShape()', () => {
        spyOn(component.game, 'createShape');

        component.onSetGlider();

        expect(component.game.createShape).toHaveBeenCalled();

    });

    it('onSetSmExp() should call game.createShape()', () => {
        spyOn(component.game, 'createShape');

        component.onSetSmExp();

        expect(component.game.createShape).toHaveBeenCalled();

    });

    it('onGameToggle() should set subscribe to Interval and call game.SetNewGen()', () => {
        component.gameStateSubscription = component.gameRunning.subscribe(() => {
            component.game.setNewGeneration();
          });
        component.gameStarted = true;
        spyOn(component.gameRunning, 'subscribe');

        component.gameToggle();

        expect(component.gameRunning.subscribe).not.toHaveBeenCalled();
    });

    it('onGameToggle() should set subscribe to Interval and call game.SetNewGen()', () => {
        spyOn(component.gameRunning, 'subscribe');

        component.gameToggle();

        expect(component.gameRunning.subscribe).toHaveBeenCalled();

    });
});
