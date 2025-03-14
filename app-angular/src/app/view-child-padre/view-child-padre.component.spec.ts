import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildPadreComponent } from './view-child-padre.component';

describe('ViewChildPadreComponent', () => {
  let component: ViewChildPadreComponent;
  let fixture: ComponentFixture<ViewChildPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildPadreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
