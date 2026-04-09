import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { invoke } from '@tauri-apps/api/core';

import { MatSidenavModule } from '@angular/material/sidenav';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { TestPlanComponent } from './component/test-plan/test-plan.component';
import { EditionTestPlan } from './component/edition-test-plan/edition-test-plan';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TestPlanComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    EditionTestPlan,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  template: `<app-test-plan></app-test-plan> <app-edition-test-plan></app-edition-test-plan>`,
})
export class AppComponent {
  greetingMessage = '';

  greet(event: SubmitEvent, name: string): void {
    event.preventDefault();

    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    invoke<string>('greet', { name }).then((text) => {
      this.greetingMessage = text;
    });
  }
}
