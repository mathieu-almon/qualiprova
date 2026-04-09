import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TestPlanCardComponent } from '../test-plan-card/test-plan-card.component';
import { TestPlanCard } from '../models/test-plan-card';
import { TestPlanService } from '../services/test-plan.service';

@Component({
  selector: 'app-test-plan',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    TestPlanCardComponent,
  ],
  templateUrl: './test-plan.component.html',
  styleUrls: ['./test-plan.component.css'],
  providers: [TestPlanService],
  template: `<app-test-plan-card></app-test-plan-card>`
})
export class TestPlanComponent {

  testPlans: TestPlanCard[] = []
  testPlanForm: FormGroup;

  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;

  constructor(public dialog: MatDialog, private fb: FormBuilder, private testPlanService: TestPlanService) {
    this.testPlanForm = this.fb.group({
      name: ['', Validators.required],
      cartegorie: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  openDialog(): void {
    this.dialog.open(this.dialogTemplate, {
      width: '300px'
    });
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }

  submit(): void {
    if (this.testPlanForm.valid) {
      this.testPlans.push(this.testPlanForm.value)
      this.testPlanForm.reset();
      this.closeDialog();
    } else {
      this.testPlanForm.markAllAsTouched();
    }
  }

  deleteTestPlan($index: number) {
    this.testPlans.splice($index, 1);
    }

  async importTestPlan(filePath: string): Promise<void> {
    const importedTestPlan = await this.testPlanService.importTestPlan(filePath);
    this.testPlans.push(importedTestPlan);
  }
}
