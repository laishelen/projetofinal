import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoutilizadorComponent } from './novoutilizador.component';

describe('NovoutilizadorComponent', () => {
  let component: NovoutilizadorComponent;
  let fixture: ComponentFixture<NovoutilizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoutilizadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoutilizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
