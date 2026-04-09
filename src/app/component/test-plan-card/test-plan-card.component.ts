// test-plan-card.component.ts
import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TestPlanCard } from '../../models/test-plan';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-test-plan-card',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './test-plan-card.component.html',
  styleUrls: ['./test-plan-card.component.scss'],
})
export class TestPlanCardComponent {
  @Input() testPlanCard: TestPlanCard = {
    name: '',
    cartegorie: '',
    description: '',
    scenarios: [],
  };
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

  constructor(private communicationService: CommunicationService) {}

  emitTestPlanCard() {
    this.communicationService.sendData(this.testPlanCard);
  }
}
