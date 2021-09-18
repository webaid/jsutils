/**
 * @param decimal Number to convert between 0 and 255
 *
 * @return Hexadecimal representation of the provided number
 */
export function toHex(decimal: number): string {
	if (decimal > 255) {
		return "ff";
	}

	if (decimal < 0) {
		return "00";
	}

	return decimal.toString(16).padStart(2, "0");
}
