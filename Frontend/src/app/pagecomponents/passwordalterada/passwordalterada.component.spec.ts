import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordalteradaComponent } from './passwordalterada.component';

describe('PasswordalteradaComponent', () => {
  let component: PasswordalteradaComponent;
  let fixture: ComponentFixture<PasswordalteradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordalteradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordalteradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
