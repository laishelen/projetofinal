import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivarcontaComponent } from './ativarconta.component';

describe('AtivarcontaComponent', () => {
  let component: AtivarcontaComponent;
  let fixture: ComponentFixture<AtivarcontaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtivarcontaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtivarcontaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
