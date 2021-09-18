import { toHex as numberToHex } from "./numbers";

/**
 * @param color Object with colors intensities
 *
 * @return {string} Hex representation of the specified rgb values
 * hash is prepended by default
 */
export function toHex(color: RGB): string {
	return `#${numberToHex(color.red)}${numberToHex(color.green)}${numberToHex(color.blue)}`;
}

/**
 * @param hex Representation of the color in hex format
 * with or without the hash symbol
 *
 * @return {RGB} An object with colors intensities
 */
export function toRgb(hex: string): RGB {
	const parts = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

	if (!parts) {
		throw new Error(`${hex} ain't a valid hex string`);
	}

	const [, r, g, b] = parts;

	return {
		red: parseInt(r, 16),
		green: parseInt(g, 16),
		blue: parseInt(b, 16)
	};
}
