// test-plan-card.component.ts
import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TestPlanCard } from '../models/test-plan-card';
import { MatCardModule } from '@angular/material/card';



@Component({
  selector: 'app-test-plan-card',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  templateUrl: './test-plan-card.component.html',
  styleUrls: ['./test-plan-card.component.css']
})
export class TestPlanCardComponent {
  @Input() testPlanCard: TestPlanCard = { name: '', cartegorie: '', description: '', testSuites: []};
  @Output() modify = new EventEmitter<TestPlanCard>();
  @Output() delete = new EventEmitter<TestPlanCard>();
  @Output() execute = new EventEmitter<TestPlanCard>();

  onModify(): void {
    this.modify.emit(this.testPlanCard);
  }

  onDelete(): void {
    this.delete.emit(this.testPlanCard);
  }

  onExecute(): void {
    this.execute.emit(this.testPlanCard);
  }
  
}
