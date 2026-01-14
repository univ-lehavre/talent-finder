/**
 * Validates if a string is a valid email address.
 * @param email - The string to validate
 * @returns True if the string is a valid email, false otherwise
 */
export const isEmail = (email: string): boolean => {
	const validation = email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
	const condition =
		email.length > 0 && email.length < 255 && validation !== null && validation.length > 0;
	return condition;
};
