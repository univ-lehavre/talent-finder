/**
 * Standard API error structure.
 */
export interface APIError {
	code: string;
	message: string;
	cause?: unknown;
}

/**
 * Standard API response wrapper.
 */
export interface APIResponse<T = unknown> {
	data: T | null;
	error: APIError | null;
}
