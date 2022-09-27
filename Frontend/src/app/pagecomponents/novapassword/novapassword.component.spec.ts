import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovapasswordComponent } from './novapassword.component';

describe('NovapasswordComponent', () => {
  let component: NovapasswordComponent;
  let fixture: ComponentFixture<NovapasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovapasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovapasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
