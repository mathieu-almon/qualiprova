import { Component, EventEmitter, Output, TemplateRef, ViewChild, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { CommonModule } from '@angular/common';
import { TestPlanCardComponent } from '../test-plan-card/test-plan-card.component';
import { MatIconModule } from '@angular/material/icon';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { TestPlanCard } from '../../models/test-plan';
import { TestPlanService } from '../../services/test-plan.service';
import { DialogFormulaireTestPlan } from '../dialog-formulaire-test-plan/dialog-formulaire-test-plan';

@Component({
  selector: 'app-test-plan',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    TestPlanCardComponent,
    MatIconModule,
    CdkDrag,
    CdkDropList,
    DialogFormulaireTestPlan,
  ],
  templateUrl: './test-plan.component.html',
  styleUrls: ['./test-plan.component.scss'],
  providers: [TestPlanService],
  template: `<app-dialog-formulaire-test-plan></app-dialog-formulaire-test-plan>
    <app-test-plan-card></app-test-plan-card>`,
})
export class TestPlanComponent {
  testPlans = signal<TestPlanCard[]>([]);

  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;

  constructor(
    public dialog: MatDialog,
    private testPlanService: TestPlanService,
  ) {}

  deleteTestPlan($index: number) {
    this.testPlans.update((testPlans: TestPlanCard[]) => {
      const newTestPlans = [...testPlans];
      newTestPlans.splice($index, 1);
      return newTestPlans;
    });
  }

  async importTestPlan(): Promise<void> {
    const importedTestPlan = await this.testPlanService.importTestPlan();
    this.testPlans.update((testPlans: TestPlanCard[]) => [...testPlans, importedTestPlan]);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.testPlans(), event.previousIndex, event.currentIndex);
  }

  addTestPlan($event: TestPlanCard) {
    this.testPlans.update((testPlans: TestPlanCard[]) => [...testPlans, $event]);
  }
}
