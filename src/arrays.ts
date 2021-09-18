/**
 * Separates items within array into multiple arrays of specified length.
 * When split can't be done evenly last array contains less items.
 *
 * @param source Initial set of elements
 * @param length Number of items per array
 */
export function chunk<T>(source: T[], length: number): T[][] {

	// result arrays, and iteration base
	return [...Array(Math.ceil(source.length / length))]
		// filling each array with it's set of items
		.map((_, i) => source.slice(i * length, (i + 1) * length));
}
