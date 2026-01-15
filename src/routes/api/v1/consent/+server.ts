import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { getConsentStatus, grantConsent, revokeConsent } from '$lib/server/consent';
import { ConsentType } from '$lib/server/consent';
import { mapErrorToResponse } from '$lib/server/http';

/**
 * GET /api/v1/consent?type=openalex_email
 * Returns the current consent status for the authenticated user.
 *
 * Query parameters:
 * - type (required): The consent type (e.g., "openalex_email")
 *
 * Response:
 * - consentType: The consent type
 * - granted: true if granted, false if revoked, null if never asked
 * - updatedAt: ISO timestamp of last update, null if never asked
 */
export const GET: RequestHandler = async ({ url, locals }) => {
	try {
		if (!locals.userId) {
			return json({ code: 'unauthenticated', message: 'User not authenticated' }, { status: 401 });
		}

		const typeParam = url.searchParams.get('type');
		if (!typeParam) {
			return json(
				{ code: 'missing_parameter', message: 'type parameter is required' },
				{ status: 400 }
			);
		}

		const parseResult = ConsentType.safeParse(typeParam);
		if (!parseResult.success) {
			return json(
				{ code: 'invalid_parameter', message: `Invalid consent type: ${typeParam}` },
				{ status: 400 }
			);
		}

		const status = await getConsentStatus(locals.userId, parseResult.data);
		return json(status);
	} catch (error: unknown) {
		return mapErrorToResponse(error);
	}
};

/**
 * POST /api/v1/consent
 * Grants or revokes consent for the authenticated user.
 *
 * Body:
 * - type (required): The consent type (e.g., "openalex_email")
 * - action (required): "grant" or "revoke"
 *
 * Response:
 * - consentType: The consent type
 * - granted: true if granted, false if revoked
 * - updatedAt: ISO timestamp of the update
 */
export const POST: RequestHandler = async ({ request, locals }) => {
	try {
		if (!locals.userId) {
			return json({ code: 'unauthenticated', message: 'User not authenticated' }, { status: 401 });
		}

		const body = await request.json();

		if (!body.type) {
			return json({ code: 'missing_parameter', message: 'type is required' }, { status: 400 });
		}

		if (!body.action) {
			return json({ code: 'missing_parameter', message: 'action is required' }, { status: 400 });
		}

		const typeResult = ConsentType.safeParse(body.type);
		if (!typeResult.success) {
			return json(
				{ code: 'invalid_parameter', message: `Invalid consent type: ${body.type}` },
				{ status: 400 }
			);
		}

		if (body.action !== 'grant' && body.action !== 'revoke') {
			return json(
				{ code: 'invalid_parameter', message: 'action must be "grant" or "revoke"' },
				{ status: 400 }
			);
		}

		const status =
			body.action === 'grant'
				? await grantConsent(locals.userId, typeResult.data)
				: await revokeConsent(locals.userId, typeResult.data);

		return json(status);
	} catch (error: unknown) {
		return mapErrorToResponse(error);
	}
};
