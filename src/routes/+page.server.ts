import { fail } from '@sveltejs/kit';

import type { TUser } from '$lib/types/api/user';
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
		const result = (await response.json()) as { data: TUser | null };
		return { user: result.data };
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

		const result = await response.json();

		if (!response.ok || result.error) {
			return fail(response.status, {
				error: true,
				message: result.error?.message ?? 'Signup failed',
				cause: result.error?.cause ?? 'Unknown error'
			});
		}

		return { success: true };
	},

	logout: async ({ fetch }) => {
		await fetch('/api/v1/auth/logout', { method: 'POST' });
		return { loggedOut: true };
	}
} satisfies Actions;
