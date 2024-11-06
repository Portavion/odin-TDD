import { calculator } from "./calculator.js";

test("Definition", () => {
	expect(typeof calculator).toBe("object");
});

test("addition", () => {
	expect(calculator.add(2, 5)).toBe(7);
});

test("subtraction", () => {
	expect(calculator.subtract(2, 5)).toBe(-3);
});

test("divide", () => {
	expect(calculator.divide(4, 2)).toBe(2);
});

test("multiply", () => {
	expect(calculator.multiply(2, 5)).toBe(10);
});
