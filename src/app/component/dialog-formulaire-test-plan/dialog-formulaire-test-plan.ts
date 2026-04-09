import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TestPlanCard } from '../../models/test-plan';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-formulaire-test-plan',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './dialog-formulaire-test-plan.html',
  styleUrl: './dialog-formulaire-test-plan.scss',
})
export class DialogFormulaireTestPlan {
  testPlanForm: FormGroup;
  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;

  @Output() testPlanCard = new EventEmitter<TestPlanCard>();

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
  ) {
    this.testPlanForm = this.fb.group({
      name: ['', [Validators.required]],
      cartegorie: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  openDialog(): void {
    this.dialog.open(this.dialogTemplate, {
      width: '300px',
    });
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }

  submit(): void {
    if (this.testPlanForm.valid) {
      this.testPlanCard.emit(this.testPlanForm.value);
      this.testPlanForm.reset();
      this.closeDialog();
    } else {
      this.testPlanForm.markAllAsTouched();
    }
  }
}
