import { Component,
          Input,
          Output,
          EventEmitter} from '@angular/core';

import { Game } from '../models/game.model';
import { Cell } from '../models/cell.model';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  @Input() game: Game;
  @Output() changedStatus: EventEmitter<number> = new EventEmitter<number>();

  onCellToggle(index: number) {
    this.changedStatus.emit(index);
  }

  trackByFn(index: number, cell: Cell ): string {
    return( cell.status );
  }

}
