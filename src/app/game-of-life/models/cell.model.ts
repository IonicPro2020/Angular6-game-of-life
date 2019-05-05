export class Cell {
    public xCor: number;
    public yCor: number;
    public aliveNeighbours: any;
    public status: string;

    constructor(xCor = 0, yCor = 0) {
        this.xCor = xCor;
        this.yCor = yCor;
        this.aliveNeighbours = 0;
        this.status = 'dead';
    }

    findLivingNeighbours(cells: Cell[]): number {
        let aliveNeighbours = 0;

        const tempArray = cells.filter(cell => {
            const xDiff = Math.abs(this.xCor - cell.xCor);
            const yDiff = Math.abs(this.yCor - cell.yCor);
              return cell.status === 'alive' && !(xDiff === 0 && yDiff === 0) && (xDiff <= 1 && yDiff <= 1);
          });

        tempArray.forEach(cell => {
            aliveNeighbours++;
        });

       return this.aliveNeighbours = aliveNeighbours;
    }

    setNewStatus(): string {
        if (this.status === 'alive') {
            if (this.aliveNeighbours < 2 || this.aliveNeighbours > 3 ) {
                return this.status = 'dead';
            }
        } else {
            if (this.aliveNeighbours === 3) {
                return this.status = 'alive';
            }
        }
    }
}
