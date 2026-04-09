import { TestSuit } from "./test-suite"

export interface TestPlanCard{
    name: string
    cartegorie: string
    description: string
    testSuites: TestSuit[]
}