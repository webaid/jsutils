import { chunk } from "../src/arrays";

test("Chunking array", () => {
	expect(chunk(["a", "b", "c", "d", "e", "f", "g"], 2)).toStrictEqual([
		["a", "b"],
		["c", "d"],
		["e", "f"],
		["g"],
	]);
});
