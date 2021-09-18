import { toHex } from "../src/numbers";

describe("Converting decimals to hex", () => {
	test.each([[255, "ff"], [0, "00"], [199, "c7"]])(
		"Checking that decimal %p is equal to hex %p",
		(decimal, hex) => {
			expect(toHex(decimal)).toBe(hex);
		}
	);
});
