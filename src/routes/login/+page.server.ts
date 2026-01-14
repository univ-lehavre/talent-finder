import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { validateMagicUrlLogin } from '$lib/server/auth';

/**
 * Handles magic link login by extracting URL parameters
 * and calling the login API endpoint.
 */
export const load: PageServerLoad = async ({ url, fetch }) => {
	const unsecuredSecret = url.searchParams.get('secret');
	const unsecuredUserId = url.searchParams.get('userId');

	const { userId, secret } = validateMagicUrlLogin(unsecuredUserId, unsecuredSecret);

	await fetch('/api/v1/auth/login', {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify({ userId, secret })
	});

	redirect(302, '/');
};
