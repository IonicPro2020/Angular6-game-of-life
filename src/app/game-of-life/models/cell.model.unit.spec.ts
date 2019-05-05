import { Cell } from './cell.model';
import { Game } from './game.model';


describe('CellModel', () => {
    let cell: Cell;
    let game: Game;

    beforeEach(() => {
        cell = new Cell;
        game = new Game(3, 3);
    });


    it('findLivingsNeighbours() should add the number of live neigbours', () => {
        const cells: Cell[] = game.cells;
        cells[1].status = 'alive';

        cell.findLivingNeighbours(cells);


        expect(cell.aliveNeighbours).toBe(1);
    });

    it('setStatus() should set status to alive if neighbours = 3', () => {
        cell.aliveNeighbours = 3;
        cell.setNewStatus();

        expect(cell.status).toBe('alive');
    });

    it('setStatus() should not change status if neighbours = 2', () => {
        cell.aliveNeighbours = 2;
        cell.status = 'alive';

        cell.setNewStatus();

        expect(cell.status).toBe('alive');
    });

    it('setStatus() should set status to dead if neighbours = 1', () => {
        cell.aliveNeighbours = 1;
        cell.status = 'alive';

        cell.setNewStatus();

        expect(cell.status).toBe('dead');
    });
});
