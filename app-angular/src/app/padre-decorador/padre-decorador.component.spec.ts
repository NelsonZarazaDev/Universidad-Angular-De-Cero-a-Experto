import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreDecoradorComponent } from './padre-decorador.component';

describe('PadreDecoradorComponent', () => {
  let component: PadreDecoradorComponent;
  let fixture: ComponentFixture<PadreDecoradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadreDecoradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreDecoradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
