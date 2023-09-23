import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeSummaryComponent } from './grade-summary.component';

describe('GradeSummaryComponent', () => {
  let component: GradeSummaryComponent;
  let fixture: ComponentFixture<GradeSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradeSummaryComponent]
    });
    fixture = TestBed.createComponent(GradeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
