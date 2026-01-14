/**
 * Authentication module
 * Handles magic link authentication with Appwrite.
 */

// Service functions
export { signupWithEmail, login, logout } from './service';

// Validators
export {
	validateSignupEmail,
	validateMagicUrlLogin,
	validateUserId,
	ensureJsonContentType,
	parseJsonBody,
	checkRequestBody
} from './validators';

// Errors
export {
	NotAnEmailError,
	MagicUrlLoginValidationError,
	UserIdValidationError,
	RequestBodyValidationError
} from './errors';
