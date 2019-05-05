import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Game } from '../models/game.model';
import { By } from '@angular/platform-browser';


describe('BoardComponent', () => {
  let brdComponent: BoardComponent;
  let golComponent: TestGolComponent;
  let fixture: ComponentFixture<TestGolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [ BoardComponent, TestGolComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGolComponent);
    golComponent = fixture.componentInstance;
    brdComponent = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(brdComponent).toBeTruthy();
  });

  it('onCellToggle(), changedStatus should emit', () => {
    spyOn(brdComponent.changedStatus, 'emit');

    brdComponent.onCellToggle(1);
    fixture.detectChanges();

    expect(brdComponent.changedStatus.emit).toHaveBeenCalled();
  });

  it('onCellToggle(), changedStatus should emit', () => {
    spyOn(golComponent, 'onCellToggled');

    brdComponent.onCellToggle(1);
    fixture.detectChanges();

    expect(golComponent.onCellToggled).toHaveBeenCalled();
   });
});


@Component({
  selector: 'app-test-gol-component',
  template: '<app-board (changedStatus) = onCellToggled(i) [game]="game"></app-board>'
})
class TestGolComponent {
  game = new Game(1, 1);

  onCellToggled(i: number) {

  }

}
