import { toRgb, toHex } from "../src/colors";

const greenRgb = { red: 52, green: 199, blue: 89 };
const greenHex = "#34c759";

test("Converting hex to rgb", () => {
	expect(toRgb(greenHex)).toStrictEqual(greenRgb);
});

test("Converting rgb to hex", () => {
	expect(toHex(greenRgb)).toStrictEqual(greenHex);
});
