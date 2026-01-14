import { redirect } from '@sveltejs/kit';
import { getProfile, isAdmin } from '$lib/server/user';
import type { PageServerLoad } from './$types';

/**
 * Load function that restricts access to admin users only.
 * Redirects non-admin users to the home page.
 */
export const load: PageServerLoad = async ({ locals }) => {
	const userId = locals.userId;

	if (!userId) {
		redirect(303, '/');
	}

	const user = await getProfile(userId);

	if (!isAdmin(user)) {
		redirect(303, '/');
	}

	return {};
};
