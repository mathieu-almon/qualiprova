import { invoke } from '@tauri-apps/api/core';
import { TestPlanCard } from '../models/test-plan';

export class TestPlanService {
  async exportTestPlan(testPlan: TestPlanCard, filePath: string): Promise<void> {
    await invoke('export_test_plan', { testPlan, filePath });
  }

  async importTestPlan(): Promise<TestPlanCard> {
    const filePath = await invoke('open_file_dialog');
    console.log(filePath);
    return await invoke('import_test_plan', { filePath });
  }
}
