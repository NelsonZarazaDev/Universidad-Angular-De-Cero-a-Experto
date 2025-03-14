import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoCalculadoraComponent } from './hijo-calculadora.component';

describe('HijoCalculadoraComponent', () => {
  let component: HijoCalculadoraComponent;
  let fixture: ComponentFixture<HijoCalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HijoCalculadoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
