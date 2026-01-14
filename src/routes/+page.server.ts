import { fail } from '@sveltejs/kit';

import type { TUser } from '$lib/server/user';
import type { PageServerLoad, Actions } from './$types';

/**
 * Load function to fetch user profile if authenticated.
 */
export const load: PageServerLoad = async ({ fetch, locals }) => {
	const userId = locals.userId;
	if (!userId) {
		return { user: null };
	}

	try {
		const response = await fetch('/api/v1/me');
		if (!response.ok) return { user: null };
		const user = (await response.json()) as TUser;
		return { user };
	} catch {
		return { user: null };
	}
};

/**
 * Form actions for authentication.
 */
export const actions = {
	signup: async ({ request, fetch }) => {
		const data: FormData = await request.formData();
		const email: string | undefined = data.get('email')?.toString().trim();

		const response = await fetch('/api/v1/auth/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email })
		});

		if (!response.ok) {
			const error = await response.json();
			return fail(response.status, {
				error: true,
				message: error.message ?? 'Signup failed',
				cause: error.cause ?? 'Unknown error'
			});
		}

		return { success: true };
	},

	logout: async ({ fetch }) => {
		await fetch('/api/v1/auth/logout', { method: 'POST' });
		return { loggedOut: true };
	}
} satisfies Actions;
