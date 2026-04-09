import { TestCase } from './test-case';

export interface Scenario {
  name: string;
  description: string;
  testCases: TestCase[];
}
