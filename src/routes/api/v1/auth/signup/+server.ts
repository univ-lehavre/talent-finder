import type { Models } from 'node-appwrite';
import { json, type RequestHandler } from '@sveltejs/kit';

import { mapErrorToResponse } from '$lib/errors/mapper';
import { signupWithEmail } from '$lib/server/services/auth';
import { checkRequestBody, validateSignupEmail } from '$lib/server/validators/auth';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await checkRequestBody(request, ['email']);
		const email: string = await validateSignupEmail(body.email);
		const token: Models.Token = await signupWithEmail(email);

		return json(
			{ data: { signedUp: true, createdAt: token.$createdAt }, error: null },
			{ status: 200 }
		);
	} catch (error: unknown) {
		return mapErrorToResponse(error);
	}
};
