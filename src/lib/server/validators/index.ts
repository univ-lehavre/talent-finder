/**
 * Validates if a string contains only hexadecimal characters.
 * Used for validating Appwrite IDs and secrets.
 * @param str - The string to validate
 * @returns True if the string is valid hexadecimal, false otherwise
 */
export const isHexadecimal = (str: string): boolean => {
	const HEX_RE = /^[0-9a-fA-F]+$/;
	return HEX_RE.test(str);
};
