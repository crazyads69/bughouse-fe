/**
 * Generates a random Vietnamese ID.
 * @returns The generated Vietnamese ID.
 */
export function generateVietnameseId(): string {
	const year = getRandomIntInclusive(0, 99).toString().padStart(2, '0')
	const month = getRandomIntInclusive(1, 12).toString().padStart(2, '0')
	const day = getRandomIntInclusive(1, 28).toString().padStart(2, '0') // Note: Vietnam uses the Gregorian calendar, which has a maximum of 28 days in February
	const threeRandomDigits = getRandomIntInclusive(0, 999).toString().padStart(3, '0')
	const genderDigit = getRandomIntInclusive(0, 1).toString() // 0 for female, 1 for male
	const checkDigit = generateCheckDigit(year + month + day + threeRandomDigits + genderDigit)
	return year + month + day + threeRandomDigits + genderDigit + checkDigit
}

/**
 * Generates a random integer between the specified minimum and maximum values (inclusive).
 *
 * @param min - The minimum value of the range.
 * @param max - The maximum value of the range.
 * @returns A random integer between the minimum and maximum values (inclusive).
 */
function getRandomIntInclusive(min: number, max: number): number {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Generates a check digit for the given ID digits.
 * The check digit is calculated using a weighted sum algorithm.
 *
 * @param idDigits - The ID digits to generate the check digit for.
 * @returns The generated check digit.
 */
function generateCheckDigit(idDigits: string): string {
	const weights = [2, 7, 9, 10, 5, 8, 4, 2, 7, 9]
	let sum = 0
	for (let i = 0; i < weights.length; i++) {
		sum += parseInt(idDigits.charAt(i)) * weights[i]
	}
	const remainder = sum % 11
	return (remainder < 10 ? remainder : 'X').toString()
}
