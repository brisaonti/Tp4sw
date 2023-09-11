import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoDePreguntasComponent } from './juego-de-preguntas.component';

describe('JuegoDePreguntasComponent', () => {
  let component: JuegoDePreguntasComponent;
  let fixture: ComponentFixture<JuegoDePreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoDePreguntasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoDePreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
