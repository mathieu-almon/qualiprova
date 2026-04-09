import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionTestPlan } from './edition-test-plan';

describe('EditionTestPlan', () => {
  let component: EditionTestPlan;
  let fixture: ComponentFixture<EditionTestPlan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditionTestPlan],
    }).compileComponents();

    fixture = TestBed.createComponent(EditionTestPlan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
