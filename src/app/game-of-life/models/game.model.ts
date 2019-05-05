import { Cell } from './cell.model';

export class Game {
    public width: number;
    public height: number;
    public cells: Cell[];
    public generation: number;
    public currentGeneration: Cell[];

    constructor(width = 0, height = 0) {
        this.width = width;
        this.height = height;
        this.cells = [];
        this.generation = 0;
        this.currentGeneration = this.cells;
        this.createCells(this.width, this.height);
    }

    createCells(width: number, height: number): void {

        let xCor = 0;
        let yCor = 0;

        for (let i = 0; i < width * height; i++) {
          if (xCor === width) {
            yCor++;
            xCor = 0;
          }

          this.cells.push(new Cell(xCor, yCor));
          xCor++;
        }

    }

    clearBoard(): void {
        this.cells.forEach(cell => {
            cell.status = 'dead';
        });
    }

    toggleCell(cellIndex: number): void {
        if (this.cells[cellIndex].status === 'dead') {
            this.cells[cellIndex].status = 'alive';
        } else {
            this.cells[cellIndex].status = 'dead';
        }

        this.cells.map(cell => {
            cell.findLivingNeighbours(this.cells);
        });
    }

    createShape(arrayOfIndexes: number[]): void {
        let i = 0;

        while (i < arrayOfIndexes.length) {
            this.cells[arrayOfIndexes[i]].status = 'alive';
            i++;
        }

        this.cells.map((cell): void => {
            cell.findLivingNeighbours(this.cells);
        });
    }

    setNewGeneration(): void {
        this.cells.map((cell): void => {
            cell.setNewStatus();
        });

        this.cells.forEach(cell => {
            cell.findLivingNeighbours(this.cells);
        });

        this.currentGeneration = this.cells;
        this.generation++;
    }
}
