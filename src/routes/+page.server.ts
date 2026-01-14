import { fail } from '@sveltejs/kit';

import type { Actions } from './$types';
import { signupWithEmail, logout } from '$lib/server/auth';
import { ApplicationError } from '$lib/server/http';

/**
 * Form actions for authentication.
 */
export const actions = {
	signup: async ({ request }) => {
		const data: FormData = await request.formData();
		const email: unknown = data.get('email')?.toString().trim();

		try {
			await signupWithEmail(email);
			return { success: true };
		} catch (error: unknown) {
			if (error instanceof ApplicationError) {
				return fail(error.httpStatus, {
					error: true,
					message: error.message,
					cause: error.cause ?? 'Unknown error'
				});
			}
			return fail(500, {
				error: true,
				message: 'Signup failed',
				cause: 'An unexpected error occurred'
			});
		}
	},

	logout: async ({ locals, cookies }) => {
		try {
			await logout(locals.userId, cookies);
		} catch {
			// Ignore logout errors - we'll clear the cookie anyway
		}
		return { loggedOut: true };
	}
} satisfies Actions;
