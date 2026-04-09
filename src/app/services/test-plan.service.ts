import { invoke } from "@tauri-apps/api/core";
import { TestPlanCard } from "../models/test-plan-card";


export class TestPlanService {
    async exportTestPlan(testPlan: TestPlanCard, filePath: string): Promise<void> {
        await invoke('export_test_plan_command', { testPlan, filePath });
    }

    async importTestPlan(filePath: string): Promise<TestPlanCard> {
        return await invoke('import_test_plan_command', { filePath });
    }
}