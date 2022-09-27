import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioperfilComponent } from './formularioperfil.component';

describe('FormularioperfilComponent', () => {
  let component: FormularioperfilComponent;
  let fixture: ComponentFixture<FormularioperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioperfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
