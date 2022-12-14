function countVowelConsonant(str) {
	let num = 0;

	for (char in str) {
		if (/[aeiou]/.test(str[char].toLowerCase())) {
			num++;
		} else if (/[bcdfghjklmnpqrstvwxys]/.test(str[char].toLowerCase())) {
			num += 2;
		}
	}

	return num;
}

/**
 * Test Suite
 */
describe("countVowelConsonant()", () => {
	it("returns total of vowels(1) and consonants(2) to be added", () => {
		// arrange
		const value = "abcDEfgh";

		// act
		const result = countVowelConsonant(value);

		// log
		console.log("result: ", result);

		// assert
		expect(result).toBe(14);
	});
});
