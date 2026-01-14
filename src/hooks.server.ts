import type { Handle } from '@sveltejs/kit';

import { SessionError } from '$lib/errors';
import { createSessionClient } from '$lib/server/appwrite';

/**
 * SvelteKit server hook that extracts user session from cookies.
 * On each request, retrieves user ID from Appwrite session cookie
 * and attaches it to event.locals.userId.
 */
export const handle: Handle = async ({ event, resolve }) => {
	try {
		const { account } = createSessionClient(event.cookies);
		const user = await account.get();
		event.locals.userId = user.$id;
	} catch (error: unknown) {
		if (!(error instanceof SessionError)) {
			console.error('Unexpected error while retrieving session', error);
		}
	}
	const response = await resolve(event);
	return response;
};
