import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualidadeComponent } from './qualidade.component';

describe('QualidadeComponent', () => {
  let component: QualidadeComponent;
  let fixture: ComponentFixture<QualidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
