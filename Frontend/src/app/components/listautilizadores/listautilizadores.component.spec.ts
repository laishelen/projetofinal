import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListautilizadoresComponent } from './listautilizadores.component';

describe('ListautilizadoresComponent', () => {
  let component: ListautilizadoresComponent;
  let fixture: ComponentFixture<ListautilizadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListautilizadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListautilizadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
