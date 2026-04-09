import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { invoke } from "@tauri-apps/api/core";

import { TestPlanCardComponent } from './test-plan-card/test-plan-card.component';
import { TestPlanComponent } from './test-plan/test-plan.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TestPlanComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `<app-test-plan></app-test-plan>`
})
export class AppComponent {
  greetingMessage = "";

  greet(event: SubmitEvent, name: string): void {
    event.preventDefault();

    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    invoke<string>("greet", { name }).then((text) => {
      this.greetingMessage = text;
    });
  }
}
