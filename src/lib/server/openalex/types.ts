import { z } from 'zod';

/**
 * OpenAlex institution from autocomplete response.
 */
export const OpenAlexInstitution = z.object({
	id: z.string(),
	display_name: z.string(),
	hint: z.string().nullable(),
	cited_by_count: z.number().int().nonnegative(),
	works_count: z.number().int().nonnegative().nullable(),
	entity_type: z.literal('institution'),
	external_id: z.string().nullable()
});

export type TOpenAlexInstitution = z.infer<typeof OpenAlexInstitution>;

/**
 * OpenAlex autocomplete response metadata.
 */
export const OpenAlexAutocompleteMeta = z.object({
	count: z.number().int().nonnegative(),
	db_response_time_ms: z.number().int().nonnegative(),
	page: z.number().int().positive(),
	per_page: z.number().int().positive()
});

export type TOpenAlexAutocompleteMeta = z.infer<typeof OpenAlexAutocompleteMeta>;

/**
 * OpenAlex autocomplete response for institutions.
 */
export const OpenAlexAutocompleteResponse = z.object({
	meta: OpenAlexAutocompleteMeta,
	results: z.array(OpenAlexInstitution)
});

export type TOpenAlexAutocompleteResponse = z.infer<typeof OpenAlexAutocompleteResponse>;

/**
 * Simplified institution for client-side use.
 */
export const Institution = z.object({
	id: z.string(),
	displayName: z.string(),
	location: z.string().nullable(),
	citedByCount: z.number().int().nonnegative(),
	worksCount: z.number().int().nonnegative().nullable()
});

export type TInstitution = z.infer<typeof Institution>;

/**
 * Institution search result response.
 */
export const InstitutionSearchResponse = z.object({
	institutions: z.array(Institution),
	meta: z.object({
		count: z.number().int().nonnegative(),
		responseTimeMs: z.number().int().nonnegative()
	})
});

export type TInstitutionSearchResponse = z.infer<typeof InstitutionSearchResponse>;
