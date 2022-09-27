import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Faixa1Component } from './faixa1.component';

describe('Faixa1Component', () => {
  let component: Faixa1Component;
  let fixture: ComponentFixture<Faixa1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Faixa1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Faixa1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
