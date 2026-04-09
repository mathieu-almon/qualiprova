import { Scenario } from './scenario';

export interface TestPlanCard {
  name: string;
  cartegorie: string;
  description: string;
  scenarios: Scenario[];
}
