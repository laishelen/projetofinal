import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropperClienteComponent } from './cropper-cliente.component';

describe('CropperClienteComponent', () => {
  let component: CropperClienteComponent;
  let fixture: ComponentFixture<CropperClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropperClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropperClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
