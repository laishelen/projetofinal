import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenugeralComponent } from './menugeral.component';

describe('MenugeralComponent', () => {
  let component: MenugeralComponent;
  let fixture: ComponentFixture<MenugeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenugeralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenugeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
