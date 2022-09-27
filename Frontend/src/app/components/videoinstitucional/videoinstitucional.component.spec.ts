import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoinstitucionalComponent } from './videoinstitucional.component';

describe('VideoinstitucionalComponent', () => {
  let component: VideoinstitucionalComponent;
  let fixture: ComponentFixture<VideoinstitucionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoinstitucionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoinstitucionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
