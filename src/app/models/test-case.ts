import { TestStep } from './test-step';

export interface TestCase {
  name: string;
  description: string;
  testSteps: TestStep[];
}
