import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemenviadaComponent } from './mensagemenviada.component';

describe('MensagemenviadaComponent', () => {
  let component: MensagemenviadaComponent;
  let fixture: ComponentFixture<MensagemenviadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensagemenviadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensagemenviadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
