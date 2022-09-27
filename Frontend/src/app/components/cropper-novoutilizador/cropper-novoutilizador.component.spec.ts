import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropperNovoutilizadorComponent } from './cropper-novoutilizador.component';

describe('CropperNovoutilizadorComponent', () => {
  let component: CropperNovoutilizadorComponent;
  let fixture: ComponentFixture<CropperNovoutilizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropperNovoutilizadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropperNovoutilizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
