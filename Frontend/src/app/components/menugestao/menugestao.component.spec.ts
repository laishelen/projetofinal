import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenugestaoComponent } from './menugestao.component';

describe('MenugestaoComponent', () => {
  let component: MenugestaoComponent;
  let fixture: ComponentFixture<MenugestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenugestaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenugestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
