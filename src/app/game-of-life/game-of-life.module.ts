import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';

import { GameOfLifeComponent } from './game-of-life.component';
import { BoardComponent } from './board/board.component';


@NgModule({
    declarations: [
        GameOfLifeComponent,
        BoardComponent
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatSelectModule,
        FlexLayoutModule
    ],
  exports: [GameOfLifeComponent]
})
export class GameOfLifeModule {

}
