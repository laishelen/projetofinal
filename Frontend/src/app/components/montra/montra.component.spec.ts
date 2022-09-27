import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontraComponent } from './montra.component';

describe('MontraComponent', () => {
  let component: MontraComponent;
  let fixture: ComponentFixture<MontraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MontraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MontraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
