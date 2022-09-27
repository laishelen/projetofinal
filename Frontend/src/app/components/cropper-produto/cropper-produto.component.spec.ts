import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropperProdutoComponent } from './cropper-produto.component';

describe('CropperProdutoComponent', () => {
  let component: CropperProdutoComponent;
  let fixture: ComponentFixture<CropperProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropperProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropperProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
