import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropperUtilizadorComponent } from './cropper-utilizador.component';

describe('CropperUtilizadorComponent', () => {
  let component: CropperUtilizadorComponent;
  let fixture: ComponentFixture<CropperUtilizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropperUtilizadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropperUtilizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
