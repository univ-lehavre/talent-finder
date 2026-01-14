import { json, type RequestHandler } from '@sveltejs/kit';

import { mapErrorToResponse } from '$lib/server/http';
import { logout, validateUserId } from '$lib/server/auth';

export const POST: RequestHandler = async ({ locals, cookies }) => {
	try {
		const userId = validateUserId(locals.userId);

		await logout(userId, cookies);

		return json({ data: { loggedOut: true }, error: null }, { status: 200 });
	} catch (error: unknown) {
		return mapErrorToResponse(error);
	}
};
