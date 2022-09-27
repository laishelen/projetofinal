import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListafornecedoresComponent } from './listafornecedores.component';

describe('ListafornecedoresComponent', () => {
  let component: ListafornecedoresComponent;
  let fixture: ComponentFixture<ListafornecedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListafornecedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListafornecedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
