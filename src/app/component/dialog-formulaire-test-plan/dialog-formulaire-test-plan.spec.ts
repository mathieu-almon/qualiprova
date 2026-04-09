import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormulaireTestPlan } from './dialog-formulaire-test-plan';

describe('DialogFormulaireTestPlan', () => {
  let component: DialogFormulaireTestPlan;
  let fixture: ComponentFixture<DialogFormulaireTestPlan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogFormulaireTestPlan],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogFormulaireTestPlan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
