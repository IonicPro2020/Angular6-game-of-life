import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { GameOfLifeComponent } from './game-of-life.component';




describe('GameOfLifeComponent', () => {
  let component: GameOfLifeComponent;
  let fixture: ComponentFixture<GameOfLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatSelectModule],
      declarations: [ GameOfLifeComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOfLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('user click on clean board button should call onClear()', () => {
    spyOn(component, 'onClear');
    const matSelect = fixture.debugElement.query(By.css('.matSelect')).nativeElement;
    matSelect.click();

    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('.clear')).nativeElement ;
    button.click();

    fixture.detectChanges();

    expect(component.onClear).toHaveBeenCalledWith();
  });

  it('user click on start/stop button should call gameToggle()', () => {
    spyOn(component, 'gameToggle');
    const button = fixture.debugElement.query(By.css('.gameToggle')).nativeElement;
    button.click();

    fixture.detectChanges();

    expect(component.gameToggle).toHaveBeenCalledWith();
  });
});

