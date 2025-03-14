import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreCalculadoraComponent } from './padre-calculadora.component';

describe('PadreCalculadoraComponent', () => {
  let component: PadreCalculadoraComponent;
  let fixture: ComponentFixture<PadreCalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadreCalculadoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
