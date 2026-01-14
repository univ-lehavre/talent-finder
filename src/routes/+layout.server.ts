import { getProfile, type TUser } from '$lib/server/user';
import type { LayoutServerLoad } from './$types';

/**
 * Load function to fetch user profile if authenticated.
 * Available to all pages via the layout.
 */
export const load: LayoutServerLoad = async ({ locals }) => {
	const userId = locals.userId;
	if (!userId) {
		return { user: null };
	}

	try {
		const user: TUser = await getProfile(userId);
		return { user };
	} catch {
		return { user: null };
	}
};
