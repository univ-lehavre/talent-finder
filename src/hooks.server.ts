import type { Handle } from '@sveltejs/kit';
import { AppwriteException } from 'node-appwrite';

import { SessionError } from '$lib/server/http';
import { createSessionClient } from '$lib/server/appwrite';

/**
 * Checks if an error is an expected authentication error.
 * @param error - The error to check
 * @returns True if the error is expected for unauthenticated users
 */
const isExpectedAuthError = (error: unknown): boolean => {
	if (error instanceof SessionError) {
		return true;
	}
	if (error instanceof AppwriteException) {
		return error.code === 401;
	}
	return false;
};

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
		if (!isExpectedAuthError(error)) {
			console.error('Unexpected error while retrieving session', error);
		}
	}
	const response = await resolve(event);
	return response;
};
