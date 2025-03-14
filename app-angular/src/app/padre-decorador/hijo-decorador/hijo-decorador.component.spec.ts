import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoDecoradorComponent } from './hijo-decorador.component';

describe('HijoDecoradorComponent', () => {
  let component: HijoDecoradorComponent;
  let fixture: ComponentFixture<HijoDecoradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HijoDecoradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoDecoradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
