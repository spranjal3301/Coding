import { describe, expect, it } from "@jest/globals";
import { sum } from "../index";


describe("sum module", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });   
});




//! Decribe
//* Helps organize tests into logical blocks (e.g., per function, module, or component).
//- describe(Groupname, fn)

//* describe("Math utilities", () => {
//*   All tests related to math go here
//* });

//! it(testName, fn) / test(testName, fn)
//* Purpose: Define a single test case

// describe("Math utilities", () => {
//*   it("should return 4 when adding 2 and 2", () => {
//*    expect(add(2, 2)).toBe(4);
//*   });

//*   test("add(2, 2) equals 4", () => {
//*     expect(add(2, 2)).toBe(4);
//*   });
// });
