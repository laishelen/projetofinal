import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropperPerfilComponent } from './cropper-perfil.component';

describe('CropperPerfilComponent', () => {
  let component: CropperPerfilComponent;
  let fixture: ComponentFixture<CropperPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropperPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropperPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
