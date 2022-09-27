import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtiveasuacontaComponent } from './ativeasuaconta.component';

describe('AtiveasuacontaComponent', () => {
  let component: AtiveasuacontaComponent;
  let fixture: ComponentFixture<AtiveasuacontaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtiveasuacontaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtiveasuacontaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
