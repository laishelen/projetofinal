import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensageminstitucionalComponent } from './mensageminstitucional.component';

describe('MensageminstitucionalComponent', () => {
  let component: MensageminstitucionalComponent;
  let fixture: ComponentFixture<MensageminstitucionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensageminstitucionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensageminstitucionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
