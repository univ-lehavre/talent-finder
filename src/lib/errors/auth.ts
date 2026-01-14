import { ApplicationError } from '$lib/errors';

/**
 * Error thrown when magic link URL parameters are invalid.
 */
export class MagicUrlLoginValidationError extends ApplicationError {
	constructor(
		message = 'Invalid magic link parameters',
		opts?: { cause?: string; details?: unknown }
	) {
		super('magicurl_login_validation_error', 400, message, opts);
	}
}

/**
 * Error thrown when user ID format is invalid.
 */
export class UserIdValidationError extends ApplicationError {
	constructor(message = 'Invalid user id', opts?: { cause?: string; details?: unknown }) {
		super('userid_validation_error', 400, message, opts);
	}
}

/**
 * Error thrown when request body validation fails.
 */
export class RequestBodyValidationError extends ApplicationError {
	constructor(message = 'Invalid request body', opts?: { cause?: string; details?: unknown }) {
		super('request_body_validation_error', 400, message, opts);
	}
}
