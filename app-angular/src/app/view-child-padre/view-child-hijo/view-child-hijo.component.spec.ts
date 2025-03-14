import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildHijoComponent } from './view-child-hijo.component';

describe('ViewChildHijoComponent', () => {
  let component: ViewChildHijoComponent;
  let fixture: ComponentFixture<ViewChildHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildHijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
