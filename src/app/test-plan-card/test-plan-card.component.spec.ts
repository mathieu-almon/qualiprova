import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPlanCardComponent } from './test-plan-card.component';

describe('TestPlanCardComponent', () => {
  let component: TestPlanCardComponent;
  let fixture: ComponentFixture<TestPlanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestPlanCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestPlanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
