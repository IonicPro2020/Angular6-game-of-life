import { Cell } from './cell.model';
import { Game } from './game.model';


describe('GamelModel', () => {
    let cell: Cell;
    let game: Game;

    beforeEach(() => {
        cell = new Cell;
        game = new Game;
    });

    it('should create a game array of length equal to width times height', () => {
        spyOn(game.cells, 'push');

        game.createCells(1, 1);

        expect(game.cells.push).toHaveBeenCalledWith(new Cell(0 , 0));
    });

    it('clearBoard() should set all cells status to dead', () => {
        game.createCells(1, 1);
        const cells: Cell[] = game.cells;
        cells[0].status = 'alive';

        game.clearBoard();

        expect(game.cells[0].status).toBe('dead');
    });

    it('toggleCell() should set cell status to alive if dead', () => {
        game.createCells(1, 1);
        const cells: Cell[] = game.cells;
        cells[0].status = 'dead';

        game.toggleCell(0);

        expect(game.cells[0].status).toBe('alive');
    });

    it('toggleCell() should set cell status to dead if alive', () => {
        game.createCells(1, 1);
        const cells: Cell[] = game.cells;
        cells[0].status = 'alive';

        game.toggleCell(0);

        expect(game.cells[0].status).toBe('dead');

    });

    it('createShape() should set the status of all the cells with their index in the array to alive', () => {
        const array: number[] = [0, 1, 2, 3];
        game.createCells(2, 2);
        const cells: Cell[] = game.cells;

        game.createShape(array);

        expect(cells[0].status).toEqual('alive');

    });

    it('cells.map() should have been called', () => {
        game.createCells(2, 2);
        spyOn(game.cells, 'map');

        game.setNewGeneration();

        expect(game.cells.map).toHaveBeenCalledTimes(1);
    });

    it('createCells() should set the status of all the cells with their index in the array to alive', () => {
        game.createCells(2, 2);
        spyOn(game.cells, 'forEach');

        game.setNewGeneration();

        expect(game.cells.forEach).toHaveBeenCalledTimes(1);
    });

});
