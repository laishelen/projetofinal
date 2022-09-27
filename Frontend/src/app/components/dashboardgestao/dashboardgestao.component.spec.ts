import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardgestaoComponent } from './dashboardgestao.component';

describe('DashboardgestaoComponent', () => {
  let component: DashboardgestaoComponent;
  let fixture: ComponentFixture<DashboardgestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardgestaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardgestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
