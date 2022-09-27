import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Faixa2Component } from './faixa2.component';

describe('Faixa2Component', () => {
  let component: Faixa2Component;
  let fixture: ComponentFixture<Faixa2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Faixa2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Faixa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
