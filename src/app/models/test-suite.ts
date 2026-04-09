import { TestStep } from "./test-step"

export interface TestSuit{
    name: string
    testSuites: TestStep[]
}

