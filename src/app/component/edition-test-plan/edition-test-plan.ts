import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TestPlanCard } from '../../models/test-plan';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { CommunicationService } from '../../services/communication.service';
import { Scenario } from '../../models/scenario';

@Component({
  selector: 'app-edition-test-plan',
  imports: [MatTreeModule, MatButtonModule, MatIconModule, MatExpansionModule, MatListModule],
  templateUrl: './edition-test-plan.html',
  styleUrl: './edition-test-plan.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditionTestPlan {
  receivedData = signal<TestPlanCard | null>(null);
  constructor(private communicationService: CommunicationService) {}

  ngOnInit() {
    this.communicationService.data$.subscribe({
      next: (data) => {
        this.receivedData.set(data);
      },
      error: (err) => {
        console.error('Error receiving test plan data:', err);
      },
    });
  }
}
