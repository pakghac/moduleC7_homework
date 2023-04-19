import { reverseString } from "./task-3.js";

describe("checking that the string is reversed", () => {
    it("the string is reversed", () => expect(reverseString("qwerty")).toBe("ytrewq"));
    it("the empty string is reversed", () => expect(reverseString("")).toBe(""));
    it("the string with whitespace is reversed", () => expect(reverseString("  51")).toBe("15  "));
});