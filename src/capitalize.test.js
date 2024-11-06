import { capitalize } from "./capitalize.js";

test("Definition", () => {
	expect(capitalize()).toBe();
});

test("lowercase 1", () => {
	expect(capitalize("morron")).toBe("Morron");
});

test("lowercase 2", () => {
	expect(capitalize("idiot")).toBe("Idiot");
});
