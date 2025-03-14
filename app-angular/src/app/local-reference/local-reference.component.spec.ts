import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalReferenceComponent } from './local-reference.component';

describe('LocalReferenceComponent', () => {
  let component: LocalReferenceComponent;
  let fixture: ComponentFixture<LocalReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalReferenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
