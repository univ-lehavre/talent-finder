import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getProfile } from '$lib/server/user';
import { mapErrorToResponse } from '$lib/server/http';

export const GET: RequestHandler = async ({ locals }) => {
	try {
		const userId = locals.userId;
		if (!userId) {
			return json(
				{ data: null, error: { code: 'unauthenticated', message: 'User not authenticated' } },
				{ status: 401 }
			);
		}
		const payload = await getProfile(userId);
		return json({ data: payload, error: null });
	} catch (error: unknown) {
		return mapErrorToResponse(error);
	}
};
