import { sum } from "../src/sum";

describe("sum function test",()=>{
    test("true test",()=>{
        const test1 = sum(1,3)
        expect(test1).toBe(4)
    })
})